import React from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useGoogleLogin } from "@react-oauth/google";
import { Column, Stack, Text, Button, Row, Line, Img } from "components";
import {auth} from 'Firebase-config'
import {useState} from "react";
const DesktopTenPage = () => {
  const[registerEmail,setRegisterEmail]=useState("");
  const[registerPass,setRegisterPass]=useState("");
  
  const register=async()=>{
    try{
  
  const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPass)
      console.log(user)
    } catch(error){
      console.log(error.message);
    }
  }
  
  
  
  return (
    <>
      <Column className="bg-orange_50_cc font-tirobangla items-center mx-[auto] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
        <Stack className="2xl:h-[1038px] 3xl:h-[1246px] lg:h-[807px] xl:h-[923px] w-[78%]">
          <Column className="absolute bg-white_A700 border-bw3 border-solid border-white_A700 bottom-[0] justify-end lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius32 shadow-bs4 w-[100%]">
            <Text className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              SIGN UP
            </Text>
            <Text className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
              Email or Phone number
            </Text>
            <Button
              className="font-normal font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[91%]"
              size="3xl"
              variant="OutlineDeeporange500"
            >
              <input placeholder="Enter your Email" 
                     onChange={(event)=>{setRegisterEmail(event.target.value);
               }}>
              </input>
            </Button>
            <Button
              className="font-baloo1 font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[91%]"
              size="2xl"
              variant="OutlineDeeporange500"
            >
               <input placeholder="Enter your Password" 
                     onChange={(event)=>{setRegisterPass(event.target.value);
               }}>
              </input>
            </Button>
            <Row className="font-tirobangla lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[91%]">
              <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[34%]">
                <Line className="absolute bg-deep_orange_500 h-[3px] left-[0] w-[87%]" />
                <Line className="absolute bg-deep_orange_500 h-[3px] w-[100%]" />
              </Stack>
              <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                Or register with
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[32%]" />
            </Row>
            <Row className="font-tirobangla items-center justify-between lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[52px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[88%]">
              <Row
                className="common-pointer bg-white_A700 border-bw5 border-deep_orange_500 border-solid items-center justify-center mt-[3px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius15 w-[45%]"
              >
                <Img
                  src="images/img_google_50X50.svg"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="google"
                />
                <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 2xl:mr-[105px] 3xl:mr-[126px] lg:mr-[81px] xl:mr-[93px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-deep_orange_500 w-[auto]"
                onClick={register}
                >
                  Google
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid items-center justify-center mb-[3px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius15 w-[45%]">
                <Img
                  src="images/img_facebook_60X60.svg"
                  className="common-pointer lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="facebook"
                />
                <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 3xl:mr-[102px] lg:mr-[66px] xl:mr-[75px] 2xl:mr-[85px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-deep_orange_500 w-[auto]">
                  Facebook
                </Text>
              </Row>
            </Row>
            <Row className="font-tirobangla justify-center lg:ml-[166px] xl:ml-[190px] 2xl:ml-[214px] 3xl:ml-[256px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[56%]">
              <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                Do you already have an account?{" "}
              </Text>
              <Text className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Log in
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

export default DesktopTenPage;
