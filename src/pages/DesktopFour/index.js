import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  SelectBox,
  List,
  Stack,
  Input,
} from "components";
import Item_flight from "./Item_flight";

const DesktopFourPage = () => {
  function handleNavigate11() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate12() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla justify-end mx-[auto] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="items-center w-[98%]">
            <Img
              src="images/img_rectangle1.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
              alt="RectangleTwentyThree"
            />
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
            className="bg-cover bg-repeat items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:pb-[31px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:px-[31px] xl:px-[35px] 2xl:px-[40px] 3xl:px-[48px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group16.png')" }}
          >
            <Img
              src="images/img_rectangle20.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[20%]"
              alt="RectangleTwentyFive"
            />
            <Text className="font-normal italic leading-[normal] lg:mb-[108px] xl:mb-[124px] 2xl:mb-[140px] 3xl:mb-[168px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 w-[62%]">
              <span className="text-white_A700 font-tirobangla">
                Best travel{" "}
              </span>
              <span className="text-white_A700 font-tirobangla lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                is the solution for your travel needs from flight, hotel,
                attraction, tour, car rental, airport transfer, activities, and
                more.
              </span>
            </Text>
          </Column>
          <Row className="bg-white_A700 border-bw3 border-deep_orange_500 border-solid items-center lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] 3xl:pr-[39px] rounded-radius32 shadow-bs1 w-[92%]">
            <Column className="bg-white_A700 border-bw3 border-deep_orange_500 border-solid font-tirobangla lg:p-[34px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[52px] rounded-bl-[32px] rounded-br-[100px] rounded-tl-[32px] rounded-tr-[100px] shadow-bs1 w-[80%]">
              <Row className="ml-[4px] w-[45%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                  London
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[7%]"
                  alt="arrowright"
                />
                <Text className="font-normal lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                  Ho Chi Minh
                </Text>
              </Row>
              <Text className="font-normal italic mb-[1px] ml-[4px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                Tue, 13 Sep 2022 | 1 passenger(s) | Economy
              </Text>
            </Column>
            <Button
              className="2xl:ml-[32px] 3xl:ml-[38px] flex items-center justify-center lg:ml-[24px] text-center w-[18%] xl:ml-[28px]"
              leftIcon={
                <Img
                  src="images/img_search_white_A700.svg"
                  className="text-center lg:w-[21px] lg:h-[21px] lg:mr-[8px] xl:w-[24px] xl:h-[25px] xl:mr-[9px] 2xl:w-[27px] 2xl:h-[28px] 2xl:mr-[11px] 3xl:w-[32px] 3xl:h-[33px] 3xl:mr-[13px]"
                  alt="search"
                />
              }
              shape="RoundedBorder33"
              size="xl"
            >
              <div className="bg-transparent font-baloobhai font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                Change Search
              </div>
            </Button>
          </Row>
        </Column>
        <Row className="items-center lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] mr-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[74%]">
          <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Filter:
          </Text>
          <SelectBox
            className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[19%]"
            placeholderClassName="text-white_A700"
            name="GroupFortyOne"
            placeholder="Transit"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_vector_white_A700.svg"
                className="lg:w-[16px] lg:h-[11px] lg:mr-[27px] xl:w-[18px] xl:h-[13px] xl:mr-[31px] 2xl:w-[21px] 2xl:h-[15px] 2xl:mr-[35px] 3xl:w-[25px] 3xl:h-[17px] 3xl:mr-[42px]"
                alt="Vector"
              />
            }
          ></SelectBox>
          <SelectBox
            className="font-normal lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[19%]"
            placeholderClassName="text-white_A700"
            name="GroupFortyTwo"
            placeholder="Time"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_vector_white_A700.svg"
                className="lg:w-[16px] lg:h-[11px] lg:mr-[27px] xl:w-[18px] xl:h-[13px] xl:mr-[31px] 2xl:w-[21px] 2xl:h-[15px] 2xl:mr-[35px] 3xl:w-[25px] 3xl:h-[17px] 3xl:mr-[42px]"
                alt="Vector"
              />
            }
          ></SelectBox>
          <SelectBox
            className="font-normal lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[19%]"
            placeholderClassName="text-white_A700"
            name="GroupFortyThree"
            placeholder="Airlines"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_vector_white_A700.svg"
                className="lg:w-[16px] lg:h-[11px] lg:mr-[27px] xl:w-[18px] xl:h-[13px] xl:mr-[31px] 2xl:w-[21px] 2xl:h-[15px] 2xl:mr-[35px] 3xl:w-[25px] 3xl:h-[17px] 3xl:mr-[42px]"
                alt="Vector"
              />
            }
          ></SelectBox>
          <SelectBox
            className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[23%]"
            placeholderClassName="text-white_A700"
            name="GroupFortyFour"
            placeholder="More filters"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_vector_white_A700.svg"
                className="lg:w-[16px] lg:h-[11px] lg:mr-[17px] xl:w-[18px] xl:h-[13px] xl:mr-[20px] 2xl:w-[21px] 2xl:h-[15px] 2xl:mr-[23px] 3xl:w-[25px] 3xl:h-[17px] 3xl:mr-[27px]"
                alt="Vector"
              />
            }
          ></SelectBox>
        </Row>
        <Column className="items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
          <List className="gap-[0] min-h-[auto] w-[93%]" orientation="vertical">
          <Item_flight></Item_flight>
          <Item_flight></Item_flight>
          <Item_flight></Item_flight>
          <Item_flight></Item_flight>
            
              
            
          </List>
          <footer className="font-baloobhai lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] w-[100%]">
            <Stack className="bg-cyan_300 lg:h-[487px] xl:h-[556px] 2xl:h-[626px] 3xl:h-[751px] pr-[1px] w-[100%]">
              <Img
                src="images/img_rectangle20.png"
                className="absolute lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] left-[3%] top-[7%] w-[25%]"
                alt="RectangleTwenty"
              />
              <Column className="absolute left-[5%] top-[30%] w-[23%]">
                <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Email: sales@besttravel.com
                </Text>
                <Text className="font-semibold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Phone Free: 123456789
                </Text>
                <Text className="font-semibold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  7:30 a.m - 4:30 p.m
                </Text>
              </Column>
              <Row className="absolute justify-end right-[12%] top-[16%] w-[57%]">
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
              <Text className="absolute font-medium leading-[normal] left-[31%] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 top-[27%] w-[7%]">
                Home
                <br />
                Contact
                <br />
                About
                <br />
                Gallery
              </Text>
              <Stack className="absolute bottom-[0] lg:h-[362px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[559px] inset-x-[0] w-[100%]">
                <Row className="absolute justify-center right-[26%] top-[0] w-[43%]">
                  <Column className="w-[83%]">
                    <Text className="font-medium leading-[normal] lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[27%]">
                      Destination
                      <br />
                      Air ticket
                      <br />
                      Hotel
                    </Text>
                    <Text className="font-medium lg:mt-[123px] xl:mt-[141px] 2xl:mt-[159px] 3xl:mt-[190px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                      Subscriber For Lastes Updates
                    </Text>
                  </Column>
                  <Text className="font-medium leading-[normal] mt-[1px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[17%]">
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
                </Row>
                <Text className="absolute font-medium leading-[normal] right-[1%] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 top-[0] w-[16%]">
                  Help/FAQ
                  <br />
                  Contact your flight
                  <br />
                  Press
                </Text>
                <Column className="absolute left-[2%] top-[6%] w-[2%]">
                  <Img
                    src="images/img_mail.svg"
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] w-[97%]"
                    alt="mail"
                  />
                  <Img
                    src="images/img_checkmark.svg"
                    className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    alt="checkmark"
                  />
                  <Img
                    src="images/img_clock_29X29.svg"
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                    alt="clock"
                  />
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[221px] xl:h-[253px] 2xl:h-[285px] 3xl:h-[341px] px-[1px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group227.png')" }}
                >
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group228.svg')",
                    }}
                  >
                    <Input
                      className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                      wrapClassName="2xl:ml-[418px] 2xl:mt-[56px] 3xl:ml-[501px] 3xl:mt-[67px] lg:ml-[325px] lg:mt-[43px] w-[26%] xl:ml-[371px] xl:mt-[49px]"
                      type="email"
                      name="Group190"
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
                    className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[11%] top-[6%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                    onClick={handleNavigate11}
                    alt="facebook"
                  />
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[18%] top-[6%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                    onClick={handleNavigate12}
                    alt="twitter"
                  />
                  <Text className="absolute font-semibold left-[31%] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 top-[10%] w-[auto]">
                    New Letter
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DesktopFourPage;
