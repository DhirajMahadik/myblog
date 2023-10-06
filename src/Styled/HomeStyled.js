import styled from "styled-components";

export const HomeStyled = styled.div`

.banner{
    height: 40vh;
    /* background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU); */
    /* background-image: url(https://www.elegantthemes.com/blog/wp-content/uploads/2017/06/shutterstock_102245596.jpg); */
    background-image: url(https://www.lsbf.org.uk/media/5546375/future-of-accounting-with-technology-transformation.jpg?width=738&height=248&mode=max);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.banner-text {

    .heading{
        font-size: 50px;
        color: #fff;
    }

   .search{
    width: 100px;
    justify-content: end;
    input{
    padding: 10px;
    border-radius: 30px;
    border: solid #fff 1px;
    background-color: transparent;
    transition: 0.3s;
    color: #ffff;
    }
    input::placeholder{
        color: #fff;
    }
   } 

   .search:hover{
        width: 75%;
        
   }
}
 

`