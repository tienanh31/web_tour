import React from "react";

import { Column, Row, Img, Text, Line, CheckBox, Button } from "components";

const DesktopTwentyFourPage = () => {
  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla mx-[auto] lg:pb-[53px] xl:pb-[61px] 2xl:pb-[69px] 3xl:pb-[82px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] shadow-bs5 w-[100%]">
              <Img
                src="images/img_rectangle1.png"
                className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] my-[2px] w-[20%]"
                alt="RectangleTwentyThree"
              />
              <Text className="bg-deep_orange_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center lg:ml-[426px] xl:ml-[487px] 2xl:ml-[548px] 3xl:ml-[657px] not-italic 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-white_A700 w-[35px]">
                1
              </Text>
              <Text className="hover:bg-deep_orange_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                Book
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[6%]" />
              <Text className="hover:bg-deep_orange_500 bg-gray_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center hover:justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] not-italic 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-white_A700 w-[35px]">
                2
              </Text>
              <Text className="hover:bg-deep_orange_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-gray_500 w-[auto]">
                Pay
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[6%]" />
              <Text className="hover:bg-deep_orange_500 bg-gray_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center hover:justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-white_A700 w-[35px]">
                3
              </Text>
              <Text className="hover:bg-deep_orange_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-gray_500 w-[auto]">
                Confirm
              </Text>
            </Row>
          </header>
        </Column>
        <Column className="items-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:px-[39px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[100%]">
          <Column className="w-[95%]">
            <Text className="font-normal not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
              Your Booking
            </Text>
            <Row className="justify-evenly lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Column className="w-[70%]">
                <Text className="font-normal font-tirobangla not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                  Fill in your details and review your booking.
                </Text>
                <Column className="bg-white_A700 font-tirobangla lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 shadow-bs4 w-[89%]">
                  <Text className="font-normal ml-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                    Contact Details{" "}
                  </Text>
                  <Text className="font-normal italic lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    Without title and punctuation
                  </Text>
                  <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[99%]">
                    <Img
                      src="images/img_clock_40X40.svg"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="clock"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                      Full Name
                    </Text>
                  </Row>
                  <Text className="font-normal italic lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    e.g. +62812345678, for Country Code (+62)
                  </Text>
                  <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center ml-[4px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[99%]">
                    <Img
                      src="images/img_call_29X29.svg"
                      className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                      alt="call"
                    />
                    <Text className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                      Mobile Number
                    </Text>
                  </Row>
                  <Text className="font-normal italic lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                    (e.g. email@example.com)
                  </Text>
                  <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] ml-[4px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[99%]">
                    <Img
                      src="images/img_mail_24X34.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[5%]"
                      alt="mail"
                    />
                    <Text className="font-medium mb-[2px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                      Email
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 font-tirobangla lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius15 shadow-bs4 w-[89%]">
                  <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[83%]">
                    <Text className="font-normal ml-[4px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                      Let us know what you need?
                    </Text>
                    <Text className="font-normal italic ml-[4px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Please note all requests are subject to hotel only
                    </Text>
                    <Row className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        Non-Smoking Room
                      </Text>
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px] xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx One"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        Smoking Room
                      </Text>
                    </Row>
                  </Column>
                  <Column className="lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                    <Line className="bg-deep_orange_500 h-[3px] rounded-radius151 w-[100%]" />
                    <Row className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[89%]">
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx Two"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        I want the big bed
                      </Text>
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px] lg:ml-[115px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx Three"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        I want a double bed
                      </Text>
                    </Row>
                    <Line className="bg-deep_orange_500 h-[3px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius151 w-[100%]" />
                    <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[82%]">
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx Four"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[39%]">
                        I want a room on the top floor
                      </Text>
                      <CheckBox
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[91px]"
                        inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                        name="bx Five"
                        label=""
                        variant="FillDeeporange5021_2"
                      ></CheckBox>
                      <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        Extra baby cot
                      </Text>
                    </Row>
                    <Line className="bg-deep_orange_500 h-[3px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius151 w-[100%]" />
                    <Row className="lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[78%]">
                      <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        Check-in time
                      </Text>
                      <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[187px] xl:ml-[214px] 2xl:ml-[241px] 3xl:ml-[289px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                        Check-out time
                      </Text>
                    </Row>
                    <Row className="font-baloo lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[83%]">
                      <Button
                        className="font-medium mt-[3px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center text-deep_orange_500 w-[36%]"
                        shape="RoundedBorder33"
                        variant="OutlineDeeporange5001_2"
                      >
                        02:00 AM
                      </Button>
                      <Button
                        className="font-medium mb-[3px] lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center text-deep_orange_500 w-[36%]"
                        shape="RoundedBorder33"
                        variant="OutlineDeeporange5001_2"
                      >
                        02:00 PM
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Row className="font-tirobangla justify-end ml-[auto] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[35%]">
                  <CheckBox
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                    inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                    name="bx Six"
                    label=""
                    variant="FillDeeporange5021_2"
                  ></CheckBox>
                  <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    I agree with all the{" "}
                  </Text>
                  <Text className="font-normal italic ml-[4px] mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 underline w-[auto]">
                    terms
                  </Text>
                </Row>
                <Button className="font-baloo1 font-normal lg:ml-[319px] xl:ml-[365px] 2xl:ml-[411px] 3xl:ml-[493px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[43%]">
                  Countine
                </Button>
              </Column>
              <Column className="bg-white_A700 items-center justify-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius15 shadow-bs1 w-[30%]">
                <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[98%]">
                  <Text className="font-normal ml-[1px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-teal_300 w-[auto]">
                    Booking information
                  </Text>
                  <Line className="bg-deep_orange_500 h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[99%]" />
                  <Img
                    src="images/img_rectangle48.png"
                    className="lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius32 w-[89%]"
                    alt="RectangleFortyEight"
                  />
                  <Text className="font-normal leading-[normal] ml-[3px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[81%]">
                    Muong Thanh Luxury Nha Trang Hotel (Khanh Hoa)
                  </Text>
                  <Text className="font-normal ml-[3px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Deluxe Room
                  </Text>
                  <Line className="bg-deep_orange_500 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]" />
                  <Text className="font-normal ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Rental City/Region
                  </Text>
                  <Text className="font-normal ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Nha Trang City
                  </Text>
                  <Text className="font-normal ml-[3px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Check-in date
                  </Text>
                  <Text className="font-normal ml-[3px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Mon, 19 September 2022 • 09:00
                  </Text>
                  <Text className="font-normal ml-[2px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Check-out date
                  </Text>
                  <Text className="font-normal ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Wed, 21 September 2022 • 09:00
                  </Text>
                  <Text className="font-normal ml-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                    Number of guests in the room
                  </Text>
                  <Text className="font-normal ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    2 guests, 1 room
                    <br />
                  </Text>
                </Column>
                <Column className="items-center lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[97%]">
                  <Line className="bg-deep_orange_500 h-[2px] w-[100%]" />
                  <Row className="justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[97%]">
                    <Text className="font-normal mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                      1 room x 1 night
                    </Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-deep_orange_500 w-[auto]">
                      $ 100
                    </Text>
                  </Row>
                  <Row className="justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[98%]">
                    <Text className="font-normal mt-[4px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-cyan_300 w-[auto]">
                      Service charge
                    </Text>
                    <Text className="font-normal mb-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-cyan_300 w-[auto]">
                      Free
                    </Text>
                  </Row>
                  <Line className="bg-deep_orange_500 h-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                  <Row className="justify-between lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[98%]">
                    <Text className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                      Total amount
                    </Text>
                    <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                      $ 100
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DesktopTwentyFourPage;
