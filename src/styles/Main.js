 import styled from "styled-components";

// for calculator outer desigh box
export const Container = styled.div`
 display:grid;
 justify-content:center;
align-content:center;
 width:400px;
 margin:40px auto;
 grid-template-columns: repeat(4,100px);
 grid-template-rows:minmax(120px,auto) repeat(5,100px);
 box-shadow:2px 2px 10px #333;
 border-raidus:10px;
`;

// for showing the output result
export const Screen = styled.div`
   
   grid-column: 1/-1;
   background-color:rgba(60,64,67,0.75);
   display:flex;
   justify-content:space-around;
   flex-direction:column;
   padding:10px;
   word-wrap:break-word;
  word-break: break-all;
   text-align:right;
   border-top-left-raidus:10px;
   border-top-right-raidus:10px;
`;

//for show the previous value also
export const Previous = styled.div`
color:rgba(255,255,255,0.75);
font-size=1.5rem;
`
//for show the current value also
export const Current= styled.div`
color:white;
font-size:2.5rem;
`;

export const Button = styled.button`

cursor:pointer;
font-size:2rem;
outline:none;
border:1px outset white;
background-color:rgba(255,255,255,0.75);
&:hover{
    background-color:rgba(255,255,255,0.9);
}
${function({gridSpan}){
    if(gridSpan){
        return `grid-column: span ${gridSpan}`;
    }
    }};
${({ operation }) => operation && "background-color:gray;"};
 ${({ control }) => control && "background-color:skyBlue;"}
 ${({ equals }) =>
     equals &&"background-color:gray; border-bottom-raidus:5px"}
 ${({ decimal }) =>
    decimal && `background-color:skyBlue;border-bottom-left-radius:10px;`};
 `;
