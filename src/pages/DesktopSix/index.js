import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack, List } from "components";

const DesktopSixPage = () => {
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla items-center justify-end mx-[auto] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
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
        <Column className="bg-white_A700 lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius15 w-[91%]">
          <Text className="font-normal font-tirobangla lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Muong Thanh Luxury Vien Trieu Nha Trang
          </Text>
          <Row className="font-baloo1 lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[22%]">
            <Button
              className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[30%]"
              shape="RoundedBorder19"
              size="md"
            >
              Hotels
            </Button>
            <Img
              src="images/img_frame3_yellow_A700_29X189.svg"
              className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[67%]"
              alt="FrameThree"
            />
          </Row>
          <Text className="font-normal font-tirobangla italic lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            Bai Duong Zone, Hon Chong Street, Vinh Phuoc ward, Nha Trang, Khanh
            Hoa Province, Vietnam, 651057
            <br />
          </Text>
          <Line className="bg-deep_orange_500 h-[4px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[95%]" />
          <Row className="lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[95%]">
            <Stack className="lg:h-[466px] xl:h-[532px] 2xl:h-[599px] 3xl:h-[719px] w-[74%]">
              <Img
                src="images/img_location_72X30.svg"
                className="absolute bottom-[38%] lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[0] w-[3%]"
                alt="location"
              />
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[466px] xl:h-[532px] 2xl:h-[599px] 3xl:h-[719px] px-[3px] rounded-radius32 w-[100%]"
                style={{ backgroundImage: "url('images/img_group71.png')" }}
              >
                <Img
                  src="images/img_location_47X30.svg"
                  className="absolute lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] left-[0] top-[10%] w-[3%]"
                  alt="location One"
                />
              </Stack>
            </Stack>
            <Column className="items-end ml-[3px] w-[26%]">
              <Column className="font-baloo items-center w-[92%]">
                <Img
                  src="images/img_rectangle42.png"
                  className="lg:h-[133px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] rounded-radius32 w-[99%]"
                  alt="RectangleFortyTwo"
                />
                <Img
                  src="images/img_rectangle43.png"
                  className="lg:h-[133px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] rounded-radius32 w-[99%]"
                  alt="RectangleFortyThree"
                />
                <Column
                  className="bg-cover bg-repeat items-end lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius32 w-[99%]"
                  style={{ backgroundImage: "url('images/img_group72.png')" }}
                >
                  <Text className="font-medium lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                    {"See All Photos >>"}
                  </Text>
                </Column>
              </Column>
              <Text className="font-normal font-tirobangla italic mr-[4px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                Price/room/night starts from
              </Text>
            </Column>
          </Row>
          <Text className="font-normal font-tirobangla 2xl:ml-[1122px] 3xl:ml-[1347px] lg:ml-[872px] xl:ml-[998px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-deep_orange_500 w-[auto]">
            $ 100
          </Text>
          <Button className="font-baloo font-semibold 3xl:ml-[1146px] lg:ml-[742px] xl:ml-[849px] 2xl:ml-[955px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[22%]">
            Select Room
          </Button>
          <Line className="bg-deep_orange_500 h-[3px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[95%]" />
          <Text className="font-normal font-tirobangla lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Facilities
          </Text>
          <Img
            src="images/img_frame26.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[93%]"
            alt="FrameTwentySix"
          />
          <Row className="font-tirobangla lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
            <Text className="font-normal mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              AC
            </Text>
            <Text className="font-normal xl:ml-[100px] 2xl:ml-[113px] 3xl:ml-[135px] lg:ml-[87px] mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Restaurant
            </Text>
            <Text className="font-normal leading-[normal] lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-gray_500 w-[10%]">
              Swimming Poor
            </Text>
            <Text className="font-normal leading-[normal] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-gray_500 w-[14%]">
              24-hours Front Desk
            </Text>
            <Text className="font-normal lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Packing
            </Text>
            <Text className="font-normal 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Elevator
            </Text>
            <Text className="font-normal xl:ml-[104px] 2xl:ml-[118px] 3xl:ml-[141px] lg:ml-[91px] mt-[4px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Wifi
            </Text>
          </Row>
          <Text className="font-normal font-tirobangla lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[399px] xl:ml-[456px] 2xl:ml-[513px] 3xl:ml-[615px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-teal_300 w-[auto]">
            See All Facilities
          </Text>
        </Column>
        <Column className="bg-white_A700 lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius15 w-[91%]">
          <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[92%]">
            <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
              Location Info
            </Text>
            <Text className="font-normal italic lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
              Bai Duong Zone, Hon Chong Street, Vinh Phuoc ward, Nha Trang,
              Khanh Hoa Province, Vietnam, 651057
              <br />
            </Text>
          </Column>
          <Stack className="lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
            <Img
              src="images/img_location_30X30.svg"
              className="absolute lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[3%] top-[28%] w-[2%]"
              alt="location Two"
            />
            <Img
              src="images/img_rectangle46.png"
              className="absolute lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]"
              alt="RectangleFortySix"
            />
          </Stack>
          <Row className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[97%]">
            <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[49%]">
              <Text className="font-normal ml-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                Nearby Places
              </Text>
              <Row className="items-end ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[93%]">
                <Img
                  src="images/img_airplane_39X45.svg"
                  className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] mb-[1px] w-[8%]"
                  alt="airplane"
                />
                <Text className="font-normal italic lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Bai Duong Beach
                </Text>
                <Text className="font-normal mb-[3px] lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  260 m
                </Text>
              </Row>
              <Row className="ml-[3px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[92%]">
                <Img
                  src="images/img_arrowdown_30X36.svg"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] w-[7%]"
                  alt="arrowdown"
                />
                <Text className="font-normal italic leading-[normal] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] mt-[1px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[56%]">
                  Nguyen Khuyen Secondary School
                </Text>
                <Text className="font-normal 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  977 m
                </Text>
              </Row>
              <Row className="items-end lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[95%]">
                <Img
                  src="images/img_vector_40X39.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[7%]"
                  alt="Vector"
                />
                <Text className="font-normal italic lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Nha Trang Railway Station
                </Text>
                <Text className="font-normal mb-[1px] 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  3.41 km
                </Text>
              </Row>
              <Row className="ml-[4px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[95%]">
                <Img
                  src="images/img_crop.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                  alt="crop"
                />
                <Text className="font-normal italic lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Vinmec Nha Trang Hospital
                </Text>
                <Text className="font-normal 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  6.88 km
                  <br />
                </Text>
              </Row>
            </Column>
            <Line className="bg-deep_orange_500 lg:h-[285px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] w-[1px]" />
            <Column className="items-center lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[46%]">
              <Column className="w-[96%]">
                <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  Popular in the Area
                </Text>
                <Row className="items-end lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                  <Img
                    src="images/img_clock_40X40.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="clock"
                  />
                  <Text className="font-normal italic lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                    Nha Trang Night Market
                  </Text>
                  <Text className="font-normal mb-[1px] 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    3.87 km
                  </Text>
                </Row>
                <Row className="items-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[99%]">
                  <Img
                    src="images/img_vector_deep_orange_502.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[6%]"
                    alt="Vector One"
                  />
                  <Text className="font-normal italic lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                    Vinwonders Nha Trang{" "}
                  </Text>
                  <Text className="font-normal mb-[1px] xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    7.70 km
                  </Text>
                </Row>
              </Column>
              <Row className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                <Img
                  src="images/img_airplane_39X45.svg"
                  className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] w-[8%]"
                  alt="airplane One"
                />
                <Text className="font-normal italic lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[auto]">
                  Bai Dai Beach
                </Text>
                <Text className="font-normal lg:ml-[179px] xl:ml-[205px] 2xl:ml-[231px] 3xl:ml-[277px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                  22.95 km
                  <br />
                </Text>
              </Row>
            </Column>
          </Row>
          <Text className="font-normal italic lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            Distances shown are based on straight line distances. Actual travel
            distances may vary.
          </Text>
        </Column>
        <Column className="bg-white_A700 font-baloobhai justify-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 w-[83%]">
          <Row className="lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mr-[251px] xl:mr-[287px] 2xl:mr-[323px] 3xl:mr-[387px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[69%]">
            <Text className="font-medium mb-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Check-in
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[182px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Check-out
            </Text>
            <Text className="font-medium lg:ml-[178px] xl:ml-[204px] 2xl:ml-[230px] 3xl:ml-[276px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Gust & room
            </Text>
          </Row>
          <Row className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[98%]">
            <Button
              className="flex items-center justify-center mt-[4px] text-center w-[25%]"
              leftIcon={
                <Img
                  src="images/img_group.svg"
                  className="text-center lg:w-[22px] lg:h-[23px] lg:mr-[11px] xl:w-[25px] xl:h-[26px] xl:mr-[13px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[15px] 3xl:w-[34px] 3xl:h-[35px] 3xl:mr-[18px]"
                  alt="Group"
                />
              }
              shape="RoundedBorder26"
              variant="OutlineDeeporange500"
            >
              <div className="bg-transparent font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                14 September 2022
              </div>
            </Button>
            <Button
              className="2xl:ml-[45px] 3xl:ml-[54px] flex items-center justify-center lg:ml-[35px] mt-[4px] text-center w-[25%] xl:ml-[40px]"
              leftIcon={
                <Img
                  src="images/img_group.svg"
                  className="text-center lg:w-[22px] lg:h-[23px] lg:mr-[7px] xl:w-[25px] xl:h-[26px] xl:mr-[8px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[9px] 3xl:w-[34px] 3xl:h-[35px] 3xl:mr-[10px]"
                  alt="Group"
                />
              }
              shape="RoundedBorder26"
              variant="OutlineDeeporange500"
            >
              <div className="bg-transparent font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                16 September 2022
              </div>
            </Button>
            <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid justify-center mb-[3px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius275 w-[25%]">
              <Img
                src="images/img_user_30X30.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                alt="user"
              />
              <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mr-[44px] xl:mr-[50px] 2xl:mr-[57px] 3xl:mr-[68px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                1 room, 1 guest
              </Text>
            </Row>
            <Button
              className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[16%]"
              shape="RoundedBorder26"
            >
              Find now
            </Button>
          </Row>
        </Column>
        <List
          className="font-tirobangla gap-[0] min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[91%]"
          orientation="vertical"
        >
          <Column className="bg-gray_100 items-center lg:my-[10px] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius32 w-[100%]">
            <Row className="items-center w-[97%]">
              <Column className="w-[35%]">
                <Img
                  src="images/img_rectangle48.png"
                  className="lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] rounded-radius32 w-[93%]"
                  alt="RectangleFortyEight"
                />
                <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[47%]">
                  <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                    Bathtub
                    <br />
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                    Coffee / Tea Maker
                    <br />
                  </Text>
                </Column>
              </Column>
              <Column className="w-[65%]">
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  Deluxe Twin Room
                </Text>
                <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]">
                  <Img
                    src="images/img_printer.svg"
                    className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[4%]"
                    alt="printer"
                  />
                  <Text className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[4px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    1 Twin Bed
                  </Text>
                  <Img
                    src="images/img_user_30X30.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[2px] w-[4%]"
                    alt="user One"
                  />
                  <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[4px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    2 Guest
                  </Text>
                  <Text className="font-normal lg:ml-[155px] xl:ml-[177px] 2xl:ml-[200px] 3xl:ml-[240px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_A700 w-[auto]">
                    (5 room(s) available)
                  </Text>
                </Row>
                <Line className="bg-deep_orange_500 h-[3.02px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]" />
                <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[28%]">
                  <Img
                    src="images/img_clock_40X40.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="clock One"
                  />
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Free Breakfast
                  </Text>
                </Row>
                <Row className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[19%]">
                  <Img
                    src="images/img_signal_23X33.svg"
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] mt-[2px] w-[22%]"
                    alt="signal"
                  />
                  <Text className="font-normal mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Free wifi
                  </Text>
                </Row>
                <Row className="ml-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[28%]">
                  <Img
                    src="images/img_videocamera_39X39.svg"
                    className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
                    alt="videocamera"
                  />
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[4px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Non-smoking
                  </Text>
                </Row>
                <Text className="font-normal italic ml-[3px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_A700 w-[auto]">
                  Note: Room rates are subject to change during holidays,
                  weekends...
                </Text>
                <Line className="bg-deep_orange_500 h-[3.52px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]" />
              </Column>
            </Row>
            <Column className="mb-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[94%]">
              <Row className="font-tirobangla items-center w-[89%]">
                <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Air Conditioning
                  <br />
                </Text>
                <Text className="font-normal lg:ml-[592px] xl:ml-[677px] 2xl:ml-[762px] 3xl:ml-[914px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-deep_orange_500 w-[auto]">
                  $ 100
                </Text>
              </Row>
              <Row className="font-tirobangla justify-between w-[100%]">
                <Text className="font-normal mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Hot Water
                </Text>
                <Text className="font-normal italic mb-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  / room / night
                </Text>
              </Row>
              <Button className="font-baloo font-semibold 3xl:ml-[1085px] lg:ml-[703px] xl:ml-[804px] 2xl:ml-[904px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[24%]">
                Book now !
              </Button>
            </Column>
          </Column>
          <Column className="bg-gray_100 items-center lg:my-[10px] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius32 w-[100%]">
            <Row className="items-center w-[97%]">
              <Column className="w-[35%]">
                <Img
                  src="images/img_rectangle48.png"
                  className="lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] rounded-radius32 w-[93%]"
                  alt="RectangleFortyEight One"
                />
                <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[47%]">
                  <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                    Bathtub
                    <br />
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                    Coffee / Tea Maker
                    <br />
                  </Text>
                </Column>
              </Column>
              <Column className="w-[65%]">
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  Deluxe Twin Room
                </Text>
                <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                  <Img
                    src="images/img_printer.svg"
                    className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] mt-[3px] w-[4%]"
                    alt="printer One"
                  />
                  <Text className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    1 Twin Bed
                  </Text>
                  <Img
                    src="images/img_user_30X30.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[4%]"
                    alt="user Two"
                  />
                  <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[2px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    2 Guest
                  </Text>
                  <Text className="font-normal lg:ml-[155px] xl:ml-[177px] 2xl:ml-[200px] 3xl:ml-[240px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_A700 w-[auto]">
                    (5 room(s) available)
                  </Text>
                </Row>
                <Line className="bg-deep_orange_500 h-[3.02px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]" />
                <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[28%]">
                  <Img
                    src="images/img_clock_40X40.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="clock Two"
                  />
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Free Breakfast
                  </Text>
                </Row>
                <Row className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[19%]">
                  <Img
                    src="images/img_signal_23X33.svg"
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] mt-[2px] w-[22%]"
                    alt="signal One"
                  />
                  <Text className="font-normal mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Free wifi
                  </Text>
                </Row>
                <Row className="ml-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[28%]">
                  <Img
                    src="images/img_videocamera_39X39.svg"
                    className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
                    alt="videocamera One"
                  />
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[4px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_500 w-[auto]">
                    Non-smoking
                  </Text>
                </Row>
                <Text className="font-normal italic ml-[3px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_A700 w-[auto]">
                  Note: Room rates are subject to change during holidays,
                  weekends...
                </Text>
                <Line className="bg-deep_orange_500 h-[3.52px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]" />
              </Column>
            </Row>
            <Column className="mb-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[94%]">
              <Row className="font-tirobangla items-center w-[89%]">
                <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Air Conditioning
                  <br />
                </Text>
                <Text className="font-normal lg:ml-[592px] xl:ml-[677px] 2xl:ml-[762px] 3xl:ml-[914px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-deep_orange_500 w-[auto]">
                  $ 100
                </Text>
              </Row>
              <Row className="font-tirobangla justify-between w-[100%]">
                <Text className="font-normal mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  Hot Water
                </Text>
                <Text className="font-normal italic mb-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                  / room / night
                </Text>
              </Row>
              <Button className="font-baloo font-semibold 3xl:ml-[1085px] lg:ml-[703px] xl:ml-[804px] 2xl:ml-[904px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[24%]">
                Book now !
              </Button>
            </Column>
          </Column>
        </List>
        <Column className="bg-white_A700 font-tirobangla lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius15 w-[91%]">
          <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Accommodation Policies
          </Text>
          <Row className="items-end lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[34%]">
            <Img
              src="images/img_clock_43X43.svg"
              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
              alt="clock Three"
            />
            <Text className="font-normal italic mb-[4px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
              Check-in/Check-out Time
            </Text>
          </Row>
          <Text className="font-normal italic lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
            Check-in:
            <br /> From 14:00
            <br /> Check-out: Before 12:00
          </Text>
          <Line className="bg-deep_orange_500 h-[2px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]" />
          <Row className="items-end lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[24%]">
            <Img
              src="images/img_clock_41X41.svg"
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mb-[3px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
              alt="clock Four"
            />
            <Text className="font-normal italic 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
              Additional Policy
            </Text>
          </Row>
          <Text className="font-normal italic leading-[normal] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[98%]">
            You may be required to present valid government-issued
            identification at check-in, along with credit card or cash to cover
            deposits and incidentals. Special request may depend on hotel's
            availability at check-in and may cost extra fee. Special request
            availability is not guaranteed. Children policy : - Children are
            under 6 years old : will be free of charge for buffet breakfast and
            sharing the bed their parents. - Children from 6 to under 12 years
            old : will be charge 50% for breakfast rates (150.000 VND
            nett/child/day) and sharing the bed their parents. - Children from
            12 years old and above : wil be compulsory put extra bed.
          </Text>
        </Column>
        <Column className="bg-white_A700 font-tirobangla lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius15 w-[91%]">
          <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Accommodation Policies
          </Text>
          <Text className="font-normal italic lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            Location
          </Text>
          <Text className="font-normal italic leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[97%]">
            Muong Thanh Luxury Nha Trang is located in area / city Loc Tho ward.
            <br />
            <br />
            The hotel is located only 1.87 km away from Nha Trang Railway
            Station.
            <br />
            <br />
            There are plenty of tourist attractions nearby, such as Nha Trang
            Port within 4.05 km, and Dam Market within 2.03 km.
          </Text>
          <Line className="bg-deep_orange_500 h-[2px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[97%]" />
          <Text className="font-normal italic 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
            About Muong Thanh Luxury Nha Trang
          </Text>
          <Text className="font-normal italic leading-[normal] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[98%]">
            Whether you are planning an event or other special occasions, Muong
            Thanh Luxury Nha Trang is a great choice for you with a large and
            well-equipped function room to suit your requirements.
            <br />
            <br />
            This hotel is the perfect choice for couples seeking a romantic
            getaway or a honeymoon retreat. Enjoy the most memorable nights with
            your loved one by staying at Muong Thanh Luxury Nha Trang.
            <br />
            <br />
            Muong Thanh Luxury Nha Trang is the splendid choice for you who are
            seeking a luxurious treat for your holiday. Get pampered with the
            most excellent services and make your holiday memorable by staying
            here.
            <br />
            <br />
            Are you a shopaholic? Staying at Muong Thanh Luxury Nha Trang will
            surely spoil you for numerous shopping centers nearby.
            <br />
          </Text>
          <Line className="bg-deep_orange_500 h-[2px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]" />
          <Row className="items-center lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
            <Column className="w-[35%]">
              <Text className="font-normal italic ml-[2px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Facilities
              </Text>
              <Text className="font-normal italic ml-[2px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Operational Hours
              </Text>
              <Text className="font-normal italic ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Distance to Downtown
              </Text>
              <Text className="font-normal italic ml-[2px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Popular Landmarks
              </Text>
              <Text className="font-normal italic lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Are they serving breakfast?
              </Text>
            </Column>
            <Column className="w-[65%]">
              <Text className="font-normal italic leading-[normal] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[100%]">
                AC, Restaurant, Swimming Pool, 24-Hour Front Desk, Parking,
                Elevator, WiFi
              </Text>
              <Text className="font-normal italic ml-[2px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                From 14:00 - Before 12:00
              </Text>
              <Text className="font-normal italic ml-[1px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                336 m
              </Text>
              <Text className="font-normal italic leading-[normal] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[100%]">
                Nha Trang Night Market, Nha Trang Port, Vinwonders Nha Trang ,
                Bai Dai Beach
              </Text>
              <Text className="font-normal italic ml-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[auto]">
                Yes
              </Text>
            </Column>
          </Row>
        </Column>
        <footer className="font-baloobhai 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]">
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
                  alt="clock Five"
                />
              </Column>
              <Stack
                className="absolute bg-cover bg-repeat bottom-[0] lg:h-[221px] xl:h-[253px] 2xl:h-[285px] 3xl:h-[341px] px-[1px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group227.png')" }}
              >
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group228.svg')" }}
                >
                  <Text className="bg-white_A700 border-4 border-deep_orange_500 border-solid font-medium lg:ml-[325px] xl:ml-[371px] 2xl:ml-[418px] 3xl:ml-[501px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[27px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius265 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_500 w-[365px]">
                    Enter your email
                  </Text>
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
                  onClick={handleNavigate1}
                  alt="facebook"
                />
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[18%] top-[6%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  onClick={handleNavigate2}
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
    </>
  );
};

export default DesktopSixPage;
