import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  SelectBox,
  CheckBox,
  Button,
} from "components";

const DesktopTwentyPage = () => {
  return (
    <>
      <Column className="bg-yellow_50 items-end mx-[auto] xl:pb-[106px] 2xl:pb-[120px] 3xl:pb-[144px] lg:pb-[93px] w-[100%]">
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
              <Text className="hover:bg-deep_orange_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-deep_orange_500 text-gray_500 w-[auto]">
                E-ticket
              </Text>
            </Row>
          </header>
        </Column>
        <Column className="lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[92%]">
          <Text className="font-normal font-tirobangla not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
            Your Booking
          </Text>
          <Text className="font-normal font-tirobangla ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            Fill in your details and review your booking.
          </Text>
          <Row className="font-tirobangla justify-between lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius15 shadow-bs4 w-[60%]">
              <Text className="font-normal ml-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Contact Details (for E-ticket)
              </Text>
              <Text className="font-normal italic lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                Without title and punctuation
              </Text>
              <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[99%]">
                <Img
                  src="images/img_clock_40X40.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  alt="clock"
                />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                  Full Name
                </Text>
              </Row>
              <Text className="font-normal italic lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                e.g. +62812345678, for Country Code (+62)
              </Text>
              <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[99%]">
                <Img
                  src="images/img_call_29X29.svg"
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                  alt="call"
                />
                <Text className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                  Mobile Number
                </Text>
              </Row>
              <Text className="font-normal italic lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                (e.g. email@example.com)
              </Text>
              <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center lg:mb-[39px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[99%]">
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
            <Stack className="lg:h-[354px] xl:h-[404px] 2xl:h-[455px] 3xl:h-[546px] lg:pr-[39px] xl:pr-[45px] 2xl:pr-[51px] 3xl:pr-[61px] w-[33%]">
              <Stack className="absolute lg:h-[354px] xl:h-[404px] 2xl:h-[455px] 3xl:h-[546px] left-[0] w-[88%]">
                <div className="absolute bg-white_A700 lg:h-[354px] xl:h-[404px] 2xl:h-[455px] 3xl:h-[546px] rounded-radius15 shadow-bs1 w-[100%]"></div>
                <Column className="absolute inset-x-[0] mx-[auto] top-[7%] w-[91%]">
                  <Text className="font-normal ml-[1px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-teal_300 w-[auto]">
                    Make your reservation
                  </Text>
                  <Line className="bg-deep_orange_500 h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Img
                    src="images/img_rectangle34.png"
                    className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[52%]"
                    alt="RectangleThirtyFour"
                  />
                  <Row className="justify-between ml-[4px] mt-[3px] w-[99%]">
                    <Column className="items-end lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[20%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                        16 : 00
                      </Text>
                      <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                        (LHR)
                      </Text>
                    </Column>
                    <Column className="items-center w-[28%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                        16h 25m
                      </Text>
                      <Stack className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[3px] w-[100%]">
                        <Line className="absolute bg-deep_orange_500_cc h-[3px] inset-x-[0] mx-[auto] top-[28%] w-[73%]" />
                        <div className="absolute bg-deep_orange_500 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] rounded-radius50 top-[0] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <div className="absolute bg-white_A700 border-bw3 border-deep_orange_500 border-solid lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] left-[0] rounded-radius50 top-[0] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text className="absolute bottom-[0] font-normal not-italic right-[25%] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                          Direct
                        </Text>
                      </Stack>
                    </Column>
                    <Column className="items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[45%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                        14 : 25 (+1 day)
                      </Text>
                      <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                        (SGN)
                      </Text>
                    </Column>
                  </Row>
                  <Line className="bg-deep_orange_500 h-[2px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
                </Column>
              </Stack>
              <Column className="absolute bottom-[9%] left-[5%] w-[80%]">
                <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Departure • Tue, 20 Sep 2022
                </Text>
                <Text className="font-normal lg:mt-[160px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[247px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                  Total amount
                </Text>
                <Text className="font-normal lg:ml-[190px] xl:ml-[217px] 2xl:ml-[245px] 3xl:ml-[294px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-deep_orange_500 w-[auto]">
                  $ 1000
                </Text>
              </Column>
            </Stack>
          </Row>
          <Column className="bg-white_A700 font-tirobangla ml-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius15 shadow-bs4 w-[60%]">
            <Text className="font-normal ml-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
              Passenger information
            </Text>
            <Text className="font-normal italic lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Without title and punctuation
            </Text>
            <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[100%]">
              <Img
                src="images/img_clock_40X40.svg"
                className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                alt="clock One"
              />
              <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                Full Name
              </Text>
            </Row>
            <Text className="font-normal italic lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              e.g. +62812345678, for Country Code (+62)
            </Text>
            <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[100%]">
              <Img
                src="images/img_call_29X29.svg"
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                alt="call One"
              />
              <Text className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                Mobile Number
              </Text>
            </Row>
          </Column>
          <Column className="bg-white_A700 justify-center ml-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius15 shadow-bs4 w-[60%]">
            <Text className="font-normal font-tirobangla ml-[1px] mt-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
              Package
            </Text>
            <SelectBox
              className="font-baloo font-medium lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[100%]"
              placeholderClassName="text-deep_orange_500"
              name="Group264"
              placeholder="Select checked baggage"
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    src="images/img_ticket_33X33.svg"
                    className="lg:w-[25px] lg:h-[26px] lg:mr-[17px] xl:w-[29px] xl:h-[30px] xl:mr-[20px] 2xl:w-[33px] 2xl:h-[34px] 2xl:mr-[23px] 3xl:w-[39px] 3xl:h-[40px] 3xl:mr-[27px]"
                    alt="ticket"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              indicator={
                <Img
                  src="images/img_arrowdown_deep_orange_502.svg"
                  className="lg:w-[20px] lg:h-[11px] lg:mr-[27px] xl:w-[23px] xl:h-[12px] xl:mr-[31px] 2xl:w-[26px] 2xl:h-[14px] 2xl:mr-[35px] 3xl:w-[31px] 3xl:h-[16px] 3xl:mr-[42px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder32"
              size="xl"
              variant="OutlineDeeporange5001_2"
            ></SelectBox>
          </Column>
          <Row className="font-tirobangla lg:ml-[371px] xl:ml-[425px] 2xl:ml-[478px] 3xl:ml-[573px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[23%]">
            <CheckBox
              className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
              inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
              name="bx"
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
          <Button className="font-baloo1 font-normal lg:ml-[320px] xl:ml-[366px] 2xl:ml-[412px] 3xl:ml-[494px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[29%]">
            Countine
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DesktopTwentyPage;
