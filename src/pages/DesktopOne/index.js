import React from "react";
import {auth} from 'Firebase-config'
import {useState} from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  Input,
  Grid,
  List,
} from "components";

const DesktopOnePage = () => {
  function handleNavigate15() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate19() {
    window.location.href = "https://www.facebook.com/login/";
  }
  const[user,setUser]=useState("");  
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })   
  return (
    <>
      <Column className="bg-yellow_50 font-ubuntu mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="3xl:h-[1138px] lg:h-[737px] xl:h-[843px] 2xl:h-[948px] w-[100%]">
            <Stack className="absolute lg:h-[623px] xl:h-[712px] 2xl:h-[801px] 3xl:h-[961px] top-[0] w-[100%]">
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[623px] xl:h-[712px] 2xl:h-[801px] 3xl:h-[961px] left-[0] pr-[3px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group224.png')" }}
              >
                <Column className="absolute inset-x-[0] mx-[auto] top-[0] w-[98%]">
                  <Row className="items-center w-[100%]">
                    <Img
                      src="images/img_rectangle1.png"
                      className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
                      alt="RectangleOne"
                    />
                    <Text className="font-bold font-poppins lg:ml-[183px] xl:ml-[209px] 2xl:ml-[236px] 3xl:ml-[283px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_500 w-[auto]">
                      Home
                    </Text>
                    <Text className="font-medium font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <a href="/tours">
                      Tours
                        </a>
                    </Text>
                    <Text className="font-medium font-poppins lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <a href="/hotels">
                      Hotel
                          </a>
                    </Text>
                    <Text className="font-medium font-poppins lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <a href="/flights">
                    Flights Ticket
                        </a>
                    </Text>
                    <Text className="font-medium font-poppins lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Contracts
                    </Text>
                    <Img
                      src="images/img_search.svg"
                      className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                      alt="search"
                    />
                    
                    <Button
                      className="font-baloo font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[13%]"
                      shape="CircleBorder38"
                      size="2xl"
                      variant="FillYellow50cc"
                    >
                      <a href="/login">
                      Book ticket
                        </a>
                      
                    </Button>
                    <Text className="font-medium font-poppins lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      </Text>
                  </Row>
                  <Text className="font-bold 3xl:ml-[1000px] lg:ml-[647px] xl:ml-[741px] 2xl:ml-[833px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-deep_orange_500 w-[auto]">
                    Explore a new
                  </Text>
                  <Column className="lg:ml-[644px] xl:ml-[736px] 2xl:ml-[828px] 3xl:ml-[994px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[36%]">
                    <Text className="font-bold font-ubuntu 3xl:text-[115px] lg:text-[74px] xl:text-[85px] 2xl:text-[96px] text-teal_300 w-[auto]">
                      World
                    </Text>
                    <Text className="font-normal font-telex leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[100%]">
                      No matter where in the world you want to go, we can help
                      you there.
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_group5.svg"
                  className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] inset-x-[0] mx-[auto] top-[37%] w-[96%]"
                  alt="GroupFive"
                />
              </Stack>
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] font-baloo items-end lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group226.png')" }}
              >
                <Button
                  className="font-semibold lg:mb-[192px] xl:mb-[219px] 2xl:mb-[247px] 3xl:mb-[296px] lg:mr-[248px] xl:mr-[283px] 2xl:mr-[319px] 3xl:mr-[383px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[19%]"
                  shape="RoundedBorder33"
                  size="xl"
                  variant="FillYellow50cc"
                >
                  Explore now
                </Button>
              </Column>
            </Stack>
            <Column className="absolute bg-white_A700 bottom-[0] font-baloobhai inset-x-[0] justify-center mx-[auto] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius15 w-[83%]">
              <Row className="lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mr-[279px] xl:mr-[319px] 2xl:mr-[359px] 3xl:mr-[431px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[66%]">
                <Text className="font-medium mb-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Where to ?
                </Text>
                <Text className="font-medium lg:ml-[167px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  When ?
                </Text>
                <Text className="font-medium lg:ml-[180px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] my-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  How many ?
                </Text>
              </Row>
              <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[99%]">
                <Text className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-medium lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius265 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_500 w-[287px]">
                  Place name
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="flex w-[25%]"
                  name="Group209"
                  placeholder="dd-mm-yy"
                  suffix={
                    <Img
                      src="images/img_group.svg"
                      className="lg:w-[15px] lg:h-[16px] lg:ml-[27px] lg:mr-[9px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] xl:mr-[10px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[35px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] 3xl:mr-[14px] my-[auto]"
                      alt="Group"
                    />
                  }
                  shape="RoundedBorder26"
                ></Input>
                <Input
                  className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="w-[25%]"
                  type="number"
                  name="Group210"
                  placeholder="Number of tourists"
                  shape="RoundedBorder26"
                ></Input>
                <Button
                  className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
                  shape="RoundedBorder26"
                >
                  Find now
                </Button>
              </Row>
            </Column>
          </Stack>
          <Stack className="font-baloobhai lg:h-[311px] xl:h-[355px] 2xl:h-[400px] 3xl:h-[480px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[83%]">
            <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] justify-end my-[auto] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] right-[0] rounded-radius32 w-[57%]">
              <Column className="3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[85%]">
                <Text className="font-baloobhai font-medium lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                  Why Choose Us
                </Text>
                <Text className="font-normal font-telex lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
                  Quality and Services
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[100%]">
                  Here, our quality and service go hand-in-hand. We do our
                  utmost to ensure that these two hallmarks are met at every
                  step of your journey...
                  <br />
                </Text>
              </Column>
              <Button
                className="font-medium lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mr-[276px] xl:mr-[315px] 2xl:mr-[355px] 3xl:mr-[426px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-center w-[33%]"
                shape="CircleBorder38"
                size="xl"
                variant="OutlineDeeporange500"
              >
                Read more
              </Button>
            </Column>
            <Img
              src="images/img_rectangle9.png"
              className="absolute lg:h-[311px] xl:h-[355px] 2xl:h-[400px] 3xl:h-[480px] left-[0] rounded-radius20 w-[49%]"
              alt="RectangleNine"
            />
          </Stack>
        </Column>
        <Img
          src="images/img_frame2.svg"
          className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[263px] xl:ml-[301px] 2xl:ml-[339px] 3xl:ml-[407px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[10%]"
          alt="FrameTwo"
        />
        <Column className="font-baloobhai items-center lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] lg:px-[464px] xl:px-[531px] 2xl:px-[597px] 3xl:px-[716px] w-[100%]">
          <Text className="font-medium lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Our Destination
          </Text>
        </Column>
        <Column className="font-baloobhai items-end lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:px-[290px] xl:px-[332px] 2xl:px-[374px] 3xl:px-[449px] w-[100%]">
          <Text className="font-semibold lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-teal_300 w-[auto]">
            Make yours destination
          </Text>
        </Column>
        <Column className="font-baloobhai items-center 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] lg:px-[36px] xl:px-[41px] 2xl:px-[47px] 3xl:px-[56px] w-[100%]">
          <Grid className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-4 w-[98%]">
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen"
              />
              <Column className="bg-white_A700 justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  London, Britain
                </Text>
                <Row className="font-baloobhai lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mr-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[84%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[58%]"
                    alt="FrameThree"
                  />
                  <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_316X316.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen One"
              />
              <Column className="bg-white_A700 justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  New York, US
                </Text>
                <Row className="font-baloobhai lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mr-[auto] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[80%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mt-[2px] w-[61%]"
                    alt="FrameThree One"
                  />
                  <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_1.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Two"
              />
              <Column className="bg-white_A700 justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Ho Chi Minh, Vietnam
                </Text>
                <Row className="font-baloobhai lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mr-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[84%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[58%]"
                    alt="FrameThree Two"
                  />
                  <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_2.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Three"
              />
              <Column className="bg-white_A700 justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Tokyo, Japan
                </Text>
                <Row className="font-baloobhai lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[85%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mt-[2px] w-[57%]"
                    alt="FrameThree Three"
                  />
                  <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_3.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Four"
              />
              <Column className="bg-white_A700 justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Seoul, Korean
                </Text>
                <Row className="font-baloobhai lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[84%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mt-[2px] w-[61%]"
                    alt="FrameThree Four"
                  />
                  <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_4.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Five"
              />
              <Column className="bg-white_A700 justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Paris, France
                </Text>
                <Row className="font-baloobhai items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[89%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[57%]"
                    alt="FrameThree Five"
                  />
                  <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_5.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Six"
              />
              <Column className="bg-white_A700 justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Shanghai, China
                </Text>
                <Row className="font-baloobhai lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[87%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[59%]"
                    alt="FrameThree Six"
                  />
                  <Text className="font-medium lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] mt-[4px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_rectangle10_6.png"
                className="lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] lg:w-[245px] xl:w-[281px] 2xl:w-[316px] 3xl:w-[379px]"
                alt="RectangleTen Seven"
              />
              <Column className="bg-white_A700 justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]">
                <Text className="font-medium font-poppins lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                  Sydney, Australia
                </Text>
                <Row className="font-baloobhai lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[89%]">
                  <Img
                    src="images/img_frame3.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mt-[2px] w-[57%]"
                    alt="FrameThree Seven"
                  />
                  <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    $ 499
                  </Text>
                </Row>
                <Text className="font-baloobhai font-medium lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                  {"Read more >"}
                </Text>
              </Column>
            </Column>
          </Grid>
          <Button
            className="font-semibold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center text-deep_orange_500 w-[18%]"
            shape="RoundedBorder33"
            size="xl"
            variant="OutlineDeeporange5001_2"
          >
            View All
          </Button>
          <Text className="font-medium xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[150px] lg:mt-[97px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Our Services
          </Text>
          <Text className="font-semibold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-teal_300 w-[auto]">
            Countless Experience
          </Text>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[41px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_share.svg"
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[100px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  alt="share"
                />
                <Text className="font-medium font-tomorrow lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Choose Destination
                </Text>
                <Text className="font-normal font-telex leading-[normal] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[82%]">
                  Many interesting places and many activities
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_user.svg"
                  className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] 3xl:w-[102px] lg:w-[66px] xl:w-[75px] 2xl:w-[85px]"
                  alt="user"
                />
                <Text className="font-medium font-tomorrow lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Five Star Hotel
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mb-[22px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[74%]">
                  Many interesting places and many activities
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[36px] xl:p-[41px] 2xl:p-[47px] 3xl:p-[56px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_airplane.svg"
                  className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] w-[25%]"
                  alt="airplane"
                />
                <Text className="font-medium font-tomorrow lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Air Ticket
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[79%]">
                  Many interesting places and many activities
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:p-[36px] xl:p-[41px] 2xl:p-[47px] 3xl:p-[56px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_trash.svg"
                  className="lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] w-[15%]"
                  alt="trash"
                />
                <Text className="font-medium font-tomorrow lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Food & Drinks
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[79%]">
                  Many interesting places and many activities
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[36px] xl:p-[41px] 2xl:p-[47px] 3xl:p-[56px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] w-[17%]"
                  alt="cut"
                />
                <Text className="font-medium font-tomorrow lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Best Price
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[79%]">
                  Many interesting places and many activities
                </Text>
              </Column>
              <Column className="bg-white_A700 lg:p-[31px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] rounded-radius32 w-[31%]">
                <Img
                  src="images/img_music.svg"
                  className="lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:w-[57px] xl:w-[65px] 2xl:w-[74px] 3xl:w-[88px]"
                  alt="music"
                />
                <Text className="font-medium font-tomorrow 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  24/7 Services
                </Text>
                <Text className="font-normal font-telex leading-[normal] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[76%]">
                  Many interesting places and many activities
                </Text>
              </Column>
            </Row>
          </List>
          <Text className="font-medium lg:mt-[126px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[195px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Our Gallary
          </Text>
          <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-teal_300 w-[auto]">
            We Record Memories
          </Text>
          <Row className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[89%]">
            <Column className="w-[32%]">
              <Img
                src="images/img_20672564740564.png"
                className="lg:h-[442px] xl:h-[506px] 2xl:h-[569px] 3xl:h-[682px] rounded-radius32 w-[100%]"
                alt="20672564740564"
              />
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                Travel Sport
              </Text>
            </Column>
            <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
              <Row className="items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle14.png"
                  className="lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] rounded-radius32 w-[51%]"
                  alt="RectangleFourteen"
                />
                <Img
                  src="images/img_rectangle15.png"
                  className="lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] rounded-radius32 w-[47%]"
                  alt="RectangleFifteen"
                />
              </Row>
              <Row className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[72%]">
                <Text className="font-medium lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                  Travel Sport
                </Text>
                <Text className="font-medium lg:ml-[220px] xl:ml-[251px] 2xl:ml-[283px] 3xl:ml-[339px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                  Travel Sport
                </Text>
              </Row>
              <Img
                src="images/img_rectangle17.png"
                className="lg:h-[222px] xl:h-[254px] 2xl:h-[286px] 3xl:h-[343px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] rounded-radius32 w-[100%]"
                alt="RectangleSeventeen"
              />
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                Travel Sport
              </Text>
            </Column>
          </Row>
        </Column>
        <Row className="font-baloobhai xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[95px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[78%]">
          <Column className="w-[61%]">
            <Img
              src="images/img_20672564740564_341X616.png"
              className="lg:h-[266px] xl:h-[304px] 2xl:h-[342px] 3xl:h-[410px] rounded-radius32 w-[90%]"
              alt="20672564740564 One"
            />
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
              Travel Sport
            </Text>
          </Column>
          <Column className="w-[39%]">
            <Img
              src="images/img_rectangle16.png"
              className="lg:h-[470px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] rounded-radius32 w-[100%]"
              alt="RectangleSixteen"
            />
            <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
              Travel Sport
            </Text>
          </Column>
        </Row>
        <Column className="font-baloobhai items-center lg:mt-[113px] xl:mt-[129px] 2xl:mt-[146px] 3xl:mt-[175px] lg:px-[244px] xl:px-[279px] 2xl:px-[314px] 3xl:px-[377px] w-[100%]">
          <Text className="font-medium lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Testimonial
          </Text>
          <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-teal_300 w-[auto]">
            What ours client say about us
          </Text>
        </Column>
        <Column className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] 2xl:px-[106px] 3xl:px-[127px] lg:px-[82px] xl:px-[94px] w-[100%]">
          <Row className="items-center justify-end w-[11%]">
            <Button
              className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              size="mdIcn"
              variant="icbOutlineTeal300"
            >
              <Img
                src="images/img_vector_teal_300.svg"
                className="flex items-center justify-center"
                alt="Vector"
              />
            </Button>
            <Button
              className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              size="mdIcn"
              variant="icbFillTeal300"
            >
              <Img
                src="images/img_vector_gray_50.svg"
                className="flex items-center justify-center"
                alt="Vector One"
              />
            </Button>
          </Row>
        </Column>
        <Column className="font-telex items-center pl-[2px] w-[100%]">
          <List
            className="2xl:gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-4 min-h-[auto] lg:pt-[16px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[95%]"
            orientation="horizontal"
          >
            <Stack className="lg:h-[284px] xl:h-[325px] 2xl:h-[366px] 3xl:h-[439px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[85%]">
                  <Img
                    src="images/img_ellipse4.png"
                    className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] rounded-radius473 w-[35%]"
                    alt="EllipseFour"
                  />
                  <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[55%]">
                    <Text className="font-baloobhai font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      Valeria
                    </Text>
                    <Text className="font-normal font-telex 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      New york, US
                    </Text>
                  </Column>
                </Row>
                <Text className="font-normal leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[85%]">
                  I had a very enjoyable and wonderful vacation
                </Text>
                <Img
                  src="images/img_frame3.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[46%]"
                  alt="FrameThree Eight"
                />
                <Row className="items-end justify-end lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[61%]">
                  <Button
                    className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    shape="icbCircleBorder15"
                    size="smIcn"
                    variant="icbFillDeeporange500"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center"
                      alt="clock"
                    />
                  </Button>
                  <Text className="font-normal mb-[3px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    21st May 2022
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_volume.svg"
                className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[0] w-[15%]"
                alt="volume"
              />
            </Stack>
            <Stack className="lg:h-[284px] xl:h-[325px] 2xl:h-[366px] 3xl:h-[439px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius32 w-[100%]">
                <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[93%]">
                  <Img
                    src="images/img_ellipse4_94X90.png"
                    className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] rounded-radius473 w-[32%]"
                    alt="EllipseFour One"
                  />
                  <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[60%]">
                    <Text className="font-baloobhai font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      Travis
                    </Text>
                    <Text className="font-normal font-telex 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                      Sydney, Australia
                    </Text>
                  </Column>
                </Row>
                <Text className="font-normal leading-[normal] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[84%]">
                  I had a very enjoyable and wonderful vacation
                </Text>
                <Img
                  src="images/img_frame3.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[46%]"
                  alt="FrameThree Nine"
                />
                <Row className="items-end justify-end lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[60%]">
                  <Button
                    className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    shape="icbCircleBorder15"
                    size="smIcn"
                    variant="icbFillDeeporange500"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center"
                      alt="clock One"
                    />
                  </Button>
                  <Text className="font-normal mb-[3px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    21st May 2022
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_volume.svg"
                className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[0] w-[15%]"
                alt="volume One"
              />
            </Stack>
            <Stack className="lg:h-[284px] xl:h-[325px] 2xl:h-[366px] 3xl:h-[439px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[100%]">
                <Row className="items-center justify-end ml-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[92%]">
                  <Img
                    src="images/img_ellipse4_1.png"
                    className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] rounded-radius473 w-[32%]"
                    alt="EllipseFour Two"
                  />
                  <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[59%]">
                    <Text className="font-baloobhai font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      Sena
                    </Text>
                    <Text className="font-normal font-telex lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      London, Britain
                    </Text>
                  </Column>
                </Row>
                <Text className="font-normal leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[85%]">
                  I had a very enjoyable and wonderful vacation
                </Text>
                <Img
                  src="images/img_frame3.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[46%]"
                  alt="FrameThree Ten"
                />
                <Row className="items-end justify-end lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[61%]">
                  <Button
                    className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    shape="icbCircleBorder15"
                    size="smIcn"
                    variant="icbFillDeeporange500"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center"
                      alt="clock Two"
                    />
                  </Button>
                  <Text className="font-normal mb-[3px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    21st May 2022
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_volume.svg"
                className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[0] w-[15%]"
                alt="volume Two"
              />
            </Stack>
            <Stack className="lg:h-[284px] xl:h-[325px] 2xl:h-[366px] 3xl:h-[439px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[83%]">
                  <Img
                    src="images/img_ellipse4_2.png"
                    className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] rounded-radius473 w-[36%]"
                    alt="EllipseFour Three"
                  />
                  <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[55%]">
                    <Text className="font-baloobhai font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      Boogie
                    </Text>
                    <Text className="font-normal font-telex lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      Paris, France
                    </Text>
                  </Column>
                </Row>
                <Text className="font-normal leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[85%]">
                  I had a very enjoyable and wonderful vacation
                </Text>
                <Img
                  src="images/img_frame3.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[46%]"
                  alt="FrameThree Eleven"
                />
                <Row className="items-end justify-end lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[61%]">
                  <Button
                    className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    shape="icbCircleBorder15"
                    size="smIcn"
                    variant="icbFillDeeporange500"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center"
                      alt="clock Three"
                    />
                  </Button>
                  <Text className="font-normal mb-[3px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    21st May 2022
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_volume.svg"
                className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[0] w-[15%]"
                alt="volume Three"
              />
            </Stack>
          </List>
          <Column
            className="bg-cover bg-repeat items-center lg:mt-[150px] xl:mt-[172px] 2xl:mt-[194px] 3xl:mt-[232px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group225.png')" }}
          >
            <Text className="font-bold font-merriweather lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
              Start your trip
            </Text>
            <Text className="font-bold font-merriweather lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-white_A700 w-[auto]">
              Let's enjoy the best together
            </Text>
            <Text className="font-normal font-telex leading-[normal] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[97%]">
              Whatever your travel preference may be, whether you are looking
              for a cultural city break, a child friendly family holiday,
              unlimited adventure, a romantic getaway or just to escape and
              uncover, we are here to create a seamless experience while
              handcrafting your bespoke journey.
            </Text>
            <Button
              className="font-baloobhai font-semibold lg:mb-[24px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center text-deep_orange_500 w-[17%]"
              shape="RoundedBorder33"
              size="xl"
              variant="OutlineDeeporange5001_2"
            >
              Book now
            </Button>
          </Column>
          <Stack className="font-baloobhai lg:h-[487px] xl:h-[556px] 2xl:h-[626px] 3xl:h-[751px] lg:mt-[225px] xl:mt-[257px] 2xl:mt-[290px] 3xl:mt-[348px] w-[100%]">
            <Row className="absolute bg-cyan_300 justify-end left-[0] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[100%]">
              <Column className="items-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[29%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] w-[85%]"
                  alt="RectangleTwenty"
                />
                <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[90%]">
                  <Row className="w-[100%]">
                    <Img
                      src="images/img_mail.svg"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] w-[8%]"
                      alt="mail"
                    />
                    <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Email: sales@besttravel.com
                    </Text>
                  </Row>
                  <Row className="ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[81%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      alt="checkmark"
                    />
                    <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Phone Free: 123456789
                    </Text>
                  </Row>
                  <Row className="items-end ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[64%]">
                    <Img
                      src="images/img_clock_29X29.svg"
                      className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                      alt="clock Four"
                    />
                    <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      7:30 a.m - 4:30 p.m
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="xl:mb-[104px] 2xl:mb-[118px] 3xl:mb-[141px] lg:mb-[91px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[69%]">
                <Row className="w-[83%]">
                  <Text className="font-semibold my-[1px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Quick links
                  </Text>
                  <Text className="font-semibold lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] my-[2px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Services
                  </Text>
                  <Text className="font-semibold mb-[3px] lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Destianation
                  </Text>
                  <Text className="font-semibold lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[3px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Help
                  </Text>
                </Row>
                <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Column className="w-[52%]">
                    <Row className="w-[70%]">
                      <Text className="font-medium leading-[normal] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[26%]">
                        Home
                        <br />
                        Contact
                        <br />
                        About
                        <br />
                        Gallery
                      </Text>
                      <Text className="font-medium leading-[normal] xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[39%]">
                        Destination
                        <br />
                        Air ticket
                        <br />
                        Hotel
                      </Text>
                    </Row>
                    <Text className="font-medium 2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                      Subscriber For Lastes Updates
                    </Text>
                  </Column>
                  <Text className="font-medium leading-[normal] mt-[1px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[11%]">
                    Vietnam
                    <br />
                    US
                    <br />
                    Britian
                    <br />
                    Australia
                    <br />
                    Korean
                    <br />
                    Japan
                    <br />
                    China
                    <br />
                    France
                  </Text>
                  <Text className="font-medium leading-[normal] lg:ml-[101px] xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] mt-[2px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[23%]">
                    Help/FAQ
                    <br />
                    Contact your flight
                    <br />
                    Press
                  </Text>
                </Row>
              </Column>
            </Row>
            <Stack
              className="absolute bg-cover bg-repeat bottom-[0] lg:h-[221px] xl:h-[253px] 2xl:h-[285px] 3xl:h-[341px] pl-[2px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group227.png')" }}
            >
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group228.svg')" }}
              >
                <Text className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-medium lg:ml-[324px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[27px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius265 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_500 w-[365px]">
                  Enter your email
                </Text>
                <Button
                  className="font-medium lg:ml-[324px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[12%]"
                  shape="RoundedBorder26"
                  variant="OutlineDeeporange500"
                >
                  Subscribe
                </Button>
              </Column>
              <Img
                src="images/img_instagram.svg"
                className="absolute lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] left-[4%] top-[5%] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                alt="instagram"
              />
              <Img
                src="images/img_facebook.svg"
                className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[11%] top-[5%] w-[4%]"
                onClick={handleNavigate19}
                alt="facebook"
              />
              <Img
                src="images/img_twitter.svg"
                className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[17%] top-[5%] w-[4%]"
                onClick={handleNavigate15}
                alt="twitter"
              />
              <Text className="absolute font-semibold left-[31%] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 top-[10%] w-[auto]">
                New Letter
              </Text>
            </Stack>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default DesktopOnePage;
