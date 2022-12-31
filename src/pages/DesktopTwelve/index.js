import React from "react";

import { Column, Stack, Text, Button, Row, Img } from "components";
import {auth} from 'Firebase-config'
import {useState} from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
const DesktopTwelvePage = () => {
  const[loginEmail,setLoginEmail]=useState("");
  const[loginPass,setLoginPass]=useState("");
  const login=async()=>{
    try{
  
      const user=await signInWithEmailAndPassword(auth,loginEmail,loginPass)
          console.log(user)
        } catch(error){
          console.log(error.message);
        }
    
  }
  const logout=async()=>{
  
  }
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla items-center mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Stack className="2xl:h-[1038px] 3xl:h-[1246px] lg:h-[807px] xl:h-[923px] w-[78%]">
          <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] justify-end lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius32 shadow-bs4 w-[100%]">
            <Text className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              MEMBERS LOGIN
            </Text>
            <Text className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Email 
            </Text>
            <Button
              className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[91%]"
              size="3xl"
              variant="OutlineDeeporange500"
            
            >
              <input placeholder="Enter your Email" text-align="">

              </input>
            </Button>
            <Row className="font-tirobangla justify-between lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[89%]">
              <Text className="font-normal mb-[4px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Passworrd
              </Text>
              <Text className="font-normal mt-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Forgot Passworrd
              </Text>
            </Row>
            <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-tirobangla items-center justify-between lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius15 w-[91%]">
              <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
              <input placeholder="Enter your Password">
              </input>
              </Text>
              <Img
                src="images/img_instagram_38X51.svg"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] my-[3px] w-[6%]"
                alt="instagram"
              />
            </Row>
            <Button
              className="font-baloo1 font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[91%]"
              size="2xl"
              variant="OutlineDeeporange5001_2"
              onClick={login}

            > 
            <a href="/">
                Log in
                </a>
              </Button>
            <Row className="font-tirobangla justify-center lg:ml-[202px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[49%]">
              <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Do not have an account?
              </Text>
              <Text className="font-normal lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] mt-[4px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
              <a href="/sign">
                  Sign Up
                        </a>
              </Text>
            </Row>
          </Column>
          <Img
            src="images/img_rectangle1.png"
            className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
            alt="RectangleSixtyFour"
          />
        </Stack>
        <Text className="font-normal lg:mb-[105px] xl:mb-[120px] 2xl:mb-[136px] 3xl:mb-[163px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
          © 2022 besttravel. All rights reserved
        </Text>
      </Column>
    </>
  );
};

export default DesktopTwelvePage;
