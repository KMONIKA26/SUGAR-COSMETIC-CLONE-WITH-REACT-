import styled from "styled-components";

export const Wrapper=styled.div`
{
    width:75%;
    margin:auto;
    min-height:100%;
}
`
export const FlexBox=styled.div`
display:flex;
gap:${props=>props.gap?props.gap:"1rem"};
width:${props=>props.width?props.width:"100%"};
background-color:red;
> div{
    width:${props=>props.divWidth?props.divWidth:"40%"};

}
`
export const ImageListBox=styled.div`
display:flex;
flex-direction:row;
padding:${props=>props.padding};



`
export const ItemDetailsWrapper=styled.div`

`
export const FlexBox2=styled.div`
display:flex;

gap:${props=>props.gap?props.gap:"1rem"};
width:${props=>props.width?props.width:"100%"};

`