import React, { useState, MouseEvent } from 'react'
import Swal from 'sweetalert2'

import { CarContainer, MainCarContainer, Gear, CarImage, CarData, CarName, CarDescription, CarDate, DescriptionContainer,  KMContainer, CarKM } from './styles'
import Toast from '../../alertSwal'
import { ICar } from '../../Store/types';
import MyStore from '../../Store'
const useStore = MyStore

export default React.memo(function ICar({_id, make, model, description, km, image, estimatedate}: ICar){
    const updateCar = useStore(state => state.updateCar)
    const [date, setDate] = useState(estimatedate)

    const handleOnClick = (event: MouseEvent) => {
        if(estimatedate){
          Toast.fire({
            icon: 'error',
            title: `#${ _id } ${ make } ${ model } is already under maintenance`
          })
        }else{
          Swal.fire({
          title: `#${ _id } ${ make } ${ model }`,
          html:`<label>Requirement: ${ description }</label><br>
            <label>User name: </label>
            <input type="text" id="name"><br>
            <label>Estimated date: </label>
            <input type="date" id="date">`,
          showCancelButton: true,
          confirmButtonText: `Save`,
          preConfirm: () => {
            const inputName = document.getElementById('name') as HTMLInputElement
            const inputDate = document.getElementById('date') as HTMLInputElement
            if(inputName.value && inputDate.value){
              (async function() {
                try{
                  await updateCar(_id, inputName.value, new Date(inputDate.value))
                  Toast.fire({
                    icon: 'success',
                    title: `#${ _id } ${ make } ${ model } under maintenance`
                  })
                  setDate(inputDate.value.replaceAll('-', '/'))
                } catch (error){
                  Toast.fire({
                    icon: 'success',
                    title: `Error: ${ error }`
                  })
                }
              })()
            }else {
              Toast.fire({
                icon: 'error',
                title: `User name and Estimated date are required`
              })
            }
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Confirm')
            }
        })
        }
    }

    return (
        <CarContainer onClick={handleOnClick}>
            <MainCarContainer key={_id}>
                { date ? <Gear src="https://i.imgur.com/0Lfbzdp.gif"/> : ""}
                <CarImage color={ date ? "1": ""} src={image}/>
            </MainCarContainer>
            <CarName>#{ _id } { make } { model }</CarName>
            <CarData>
                <DescriptionContainer>
                    <CarDescription> { description } </CarDescription>
                    { date ? <CarDate>Estimated date: {date}</CarDate> : ""}
                </DescriptionContainer>
                {km ?  
                <KMContainer>
                    <CarKM> { km } <br/> Km </CarKM>
                </KMContainer>
                : ""}
            </CarData>
        </CarContainer>
    )
})