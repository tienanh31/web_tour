import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Input,
  Line,
  CheckBox,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import Item_hotel from "./Item_hotel.js";

const DesktopFivePage = () => {
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla items-center justify-end mx-[auto] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
        <Row className="items-center w-[98%]">
          <Img
            src="images/img_rectangle1.png"
            className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
            alt="RectangleTwentyThree"
          >
          </Img>
           
          <Text className="font-bold font-poppins lg:ml-[184px] xl:ml-[210px] 2xl:ml-[237px] 3xl:ml-[284px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_500 w-[auto]">
            Home
          </Text>
          <Text className="font-medium font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            About Us
          </Text>
          <Text className="font-medium font-poppins lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            Destination
          </Text>
          <Text className="font-medium font-poppins lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            Packages
          </Text>
          <Text className="font-medium font-poppins lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            Contracts
          </Text>
          <Img
            src="images/img_search.svg"
            className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
            alt="search"
          />
          <Button
            className="font-baloo font-semibold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[13%]"
            shape="CircleBorder38"
            size="2xl"
            variant="FillDeeporange5004c"
          >
            Book ticket
          </Button>
        </Row>
        <Column
          className="bg-cover bg-repeat items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[40px] lg:px-[26px] xl:px-[30px] 2xl:px-[34px] 3xl:px-[40px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group16_440X1440.png')" }}
        >
          <Img
            src="images/img_rectangle20.png"
            className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
            alt="RectangleTwentyFive"
          />
          <Text className="font-normal leading-[normal] lg:mb-[120px] xl:mb-[137px] 2xl:mb-[155px] 3xl:mb-[186px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[50%]">
            Search and book hotels in 3 easy steps here!
          </Text>
        </Column>
        <Row className="font-baloobhai justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
          <Text className="font-medium lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Sort Results
            <br />
          </Text>
          <Stack className="lg:h-[109px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] w-[73%]">
            <Column className="absolute bg-white_A700 border-bw3 border-deep_orange_500 border-solid items-end justify-end left-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius32 shadow-bs1 w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="2xl:mb-[15px] 2xl:mt-[23px] 3xl:mb-[18px] 3xl:mt-[27px] flex lg:mb-[11px] lg:mt-[17px] w-[24%] xl:mb-[13px] xl:mt-[20px]"
                name="GroupThirtyThree"
                placeholder="Change Search"
                prefix={
                  <Img
                    src="images/img_search_white_A700.svg"
                    className="cursor-pointer ml-[1px] lg:w-[21px] lg:h-[21px] lg:mr-[10px] xl:w-[24px] xl:h-[25px] xl:mr-[11px] 2xl:w-[27px] 2xl:h-[28px] 2xl:mr-[13px] 3xl:w-[32px] 3xl:h-[33px] 3xl:mr-[15px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#ffffff"
                      className="cursor-pointer lg:w-[21px] lg:h-[21px] lg:ml-[7px] lg:mr-[17px] xl:w-[24px] xl:h-[25px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[27px] 2xl:h-[28px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[32px] 3xl:h-[33px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcCircleBorder35"
                size="mdSrc"
                variant="srcFillDeeporange500"
              ></Input>
            </Column>
            <Column className="absolute bg-white_A700 border-bw3 border-deep_orange_500 border-solid font-tirobangla left-[0] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-bl-[32px] rounded-br-[100px] rounded-tl-[32px] rounded-tr-[100px] shadow-bs1 w-[74%]">
              <Text className="font-normal ml-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Your search results in Nha Trang, Vietnam
              </Text>
              <Text className="font-normal italic mb-[4px] ml-[4px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                15 Sep 2022 - 16 Sep 2022
              </Text>
            </Column>
          </Stack>
        </Row>
        <Row className="font-baloobhai items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
          <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            Sort your search results by:
          </Text>
          <Line className="bg-deep_orange_500 h-[2px] w-[73%]" />
        </Row>
        <Row className="font-telex lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[97%]">
          <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] px-[4px] w-[28%]">
            <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[69%]">
              <Row className="w-[100%]">
                <Img
                  src="images/img_television.svg"
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                  alt="television"
                />
                <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[4px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Highest Popularity
                </Text>
              </Row>
              <Row className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[76%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Highest Price
                </Text>
              </Row>
              <Row className="lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[73%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx One"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Lowest Price
                </Text>
              </Row>
            </Column>
            <Column className="font-baloobhai lg:mr-[20px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
              <Line className="bg-deep_orange_500 h-[2px] w-[100%]" />
              <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Price range
              </Text>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
                <Img
                  src="images/img_television.svg"
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[3px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                  alt="television One"
                />
                <Text className="font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  All
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[70%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[3px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Two"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  From $0 to $500
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[83%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Three"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  From $500 to $1000
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[53%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Four"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Over $1000
                </Text>
              </Row>
              <Line className="bg-deep_orange_500 h-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
              <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Location
              </Text>
              <Stack className="bg-white_A700 border-4 border-deep_orange_500 border-solid lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius15 w-[100%]">
                <Img
                  src="images/img_search.svg"
                  className="absolute lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] inset-y-[0] my-[auto] right-[0] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  alt="search Two"
                />
              </Stack>
              <Line className="bg-deep_orange_500 h-[2px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]" />
              <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Facilities
              </Text>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[23%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[2px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Five"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Wifi
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[63%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[2px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Six"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Swimming Poor
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[34%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[2px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Seven"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Parking
                </Text>
              </Row>
              <Row className="font-telex items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[46%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Eight"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Restaurant
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[77%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Nine"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  24-Hour Front Desk
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[37%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Ten"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Elevator
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[72%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Eleven"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Wheelchair Access
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[58%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Twelve"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Fitness Center
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[69%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Thirteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Meeting Facilities
                </Text>
              </Row>
              <Row className="font-telex lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[63%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Fourteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Airport Transfer
                </Text>
              </Row>
              <Line className="bg-deep_orange_500 h-[2px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]" />
              <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Accommodation Type
              </Text>
              <Row className="font-telex lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[31%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Fifteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Hotels
                </Text>
              </Row>
              <Row className="font-telex lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[27%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Sixteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  B & B
                </Text>
              </Row>
              <Row className="font-telex lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[49%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Seventeen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Apartments
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[34%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Eighteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Resorts
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[32%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Nineteen"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Others
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[33%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx Twenty"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Homes
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[27%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx TwentyOne"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Villas
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[55%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx TwentyTwo"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Guest Houses
                </Text>
              </Row>
              <Row className="font-telex 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[47%]">
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx TwentyThree"
                  label=""
                ></CheckBox>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[3px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Homestays
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="font-tirobangla w-[72%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Item_hotel></Item_hotel>
              <Item_hotel></Item_hotel>
              <Item_hotel></Item_hotel>
              <Item_hotel></Item_hotel>
              <Item_hotel></Item_hotel>
                
          
        
                    
                  
            </List>
            <Row className="justify-end ml-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:pt-[25px] xl:pt-[29px] 2xl:pt-[33px] 3xl:pt-[39px] w-[54%]">
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[2px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                size="md"
                variant="OutlineDeeporange5001_2"
              >
                {"<"}
              </Button>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-white_A700 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                variant="OutlineDeeporange5001_2"
              >
                1
              </Button>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                variant="OutlineDeeporange5001_2"
              >
                2
              </Button>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                variant="OutlineDeeporange5001_2"
              >
                3
              </Button>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                variant="OutlineDeeporange5001_2"
              >
                4
              </Button>
              <Text className="font-baloo font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 w-[auto]">
                ...
              </Text>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                variant="OutlineDeeporange5001_2"
              >
                10
              </Button>
              <Button
                className="font-normal font-telex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center text-deep_orange_500 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="RoundedBorder10"
                size="md"
                variant="OutlineDeeporange5001_2"
              >
                {">"}
              </Button>
            </Row>
          </Column>
        </Row>
        <footer className="font-baloobhai 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[100%]">
          <Stack className="lg:h-[487px] xl:h-[556px] 2xl:h-[626px] 3xl:h-[751px] w-[100%]">
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
                      alt="clock"
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
              className="absolute bg-cover bg-repeat bottom-[0] lg:h-[221px] xl:h-[253px] 2xl:h-[285px] 3xl:h-[341px] px-[2px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group228.svg')" }}
            >
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group228.svg')" }}
              >
                <Input
                  className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:ml-[418px] 2xl:mt-[56px] 3xl:ml-[501px] 3xl:mt-[67px] lg:ml-[325px] lg:mt-[43px] w-[26%] xl:ml-[371px] xl:mt-[49px]"
                  type="email"
                  name="GroupFiftySix"
                  placeholder="Enter your email"
                  shape="RoundedBorder26"
                ></Input>
                <Button
                  className="font-medium lg:ml-[325px] xl:ml-[371px] 2xl:ml-[418px] 3xl:ml-[501px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[12%]"
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
                className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[11%] top-[5%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                onClick={handleNavigate6}
                alt="facebook"
              />
              <Img
                src="images/img_twitter.svg"
                className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[18%] top-[5%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                onClick={handleNavigate7}
                alt="twitter"
              />
              <Text className="absolute font-semibold left-[31%] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 top-[10%] w-[auto]">
                New Letter
              </Text>
            </Stack>
          </Stack>
        </footer>
      </Column>
    </>
  );
};

export default DesktopFivePage;
