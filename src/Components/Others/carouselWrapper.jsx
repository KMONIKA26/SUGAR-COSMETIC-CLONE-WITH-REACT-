import styled from "styled-components"

export const Item = styled.div`
left: 0px;
  right: 0px;
  position:relative;
  margin-left: -33.33%;
  margin-right: -33.33%;
display: flex;
justify-content: center;
transform: translateZ(0);


width: 100vw;
position:width;
& :hover {
  .rec.rec-arrow {
    background-color: "red";
    
  }
}

> * {
  width: inherit;

  
}
`;
export const WrapperItem = styled.div`
  margin: -3rem 0;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  left: 0px;
  right: 0px;
  &:hover {
    > * .rec.rec-arrow {
      display: block;
    }
  }
 
`;

export const WrapperItem2 = styled.div`
    margin:2rem auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 80%;
  position: relative;

  &:hover {
    > * .rec.rec-arrow {
      display: block;
    }
  }
  > * .rec.rec-arrow:nth-of-type(1){
    left:-2%;

  }
  > * .rec.rec-arrow:nth-of-type(2){
left:100%;
  }
`;

export const TopItemWrapper = styled.div`
margin:${props=>props.margin?props.margin:"2rem 0"};
width:${props=>props.width?props.width:"auto"};
background-color:${props=>props.bgColor?props.bgColor:"initial"};
border-radius:${props=>props.borderRadius?props.borderRadius:"0"};

> div{
    font-size:${props => props.fontSize};
    color:${props => props.color};
    font-weight:${props => props.fontWeight};
    line-height:34px;
    padding:${props=>props.paddy?props.paddy:0}

}
`

export const ItemContainer=styled.div`
{
  left: ${props=>props.left};
  
  position:relative;
  
display: flex;

justify-content: center;



width: ${props=>props.width};

> .box-item{
  width:100%;
  margin:${props=>props.margin};
  
} 
> * img{
    width:${props=>props.imageWidth};
    padding:${props=>props.imagePadding};
    height:${props=>props.imageHeight};

}
> * .product-name{
    font-size:14px;
    font-weight:700;
    line-height:24px;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

}
> * .price{
    margin-top:10px;
    font-size:16px;
    font-weight:700;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
> * .chooseProduct{
    font-size:16px;
    background-color:black;
    color:white;
    padding:0.3rem;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
> * .cartProduct{
visibility:hidden;
position:absolute;
bottom:0px;

}
> * .wishlist{
  
}
&:hover{
  border: 1px solid;
  box-shadow:2px 2px 2px 2px #F5F5F5;
border-box{
  1px solid black;
}

>  * .cartProduct{
    visibility:visible;
    display:flex;
    width:100%;
    border:1px solid black;
  }
  > * .cartProduct > .chooseProduct{
    width:80%;
  }
  > * .cartProduct > .wishlist{
    width:20%;
  }
}
`
export const WrapperItem3 = styled.div`
    margin:4rem auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  position: relative;

  &:hover {
    > * .rec.rec-arrow {
      display: block;
    }
  }
  > * .rec.rec-arrow:nth-of-type(1){
    left:2%;
    

  }
  > * .rec.rec-arrow:nth-of-type(2){
left:94%;

  }
`;

export const WrapperCarousel = styled.div`
    margin:2rem 0;
    // background-color:red;
    
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  
  position: relative;
  left: 0px;
  right: 0px;
  
  
  > * .rec.rec-arrow:nth-of-type(1){
    
    top:-4rem;
    left:calc(50% - 24px);
    
  }
  > * .rec.rec-arrow:nth-of-type(2){
top:95%;
left:calc(50% - 24px);


  }
  > * .rec.rec-arrow{
    display:block;
    background-color:grey;
  }
 
`;

export const FlexWrapperItem = styled.div`
    margin:2rem auto;
  font-family: sans-serif;
  display: flex;
  flex-wrap:wrap;
  background-color:red;
  width: 90%;
  gap:2rem;
  position: relative;
> div{
width:calc(25% - 6rem)
}

  
`;


