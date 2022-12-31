import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Input,
  CheckBox,
  SelectBox,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DesktopThirtyPage = () => {
  function handleNavigate4() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate5() {
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
        <Stack className="font-baloo lg:h-[428px] xl:h-[490px] 2xl:h-[551px] 3xl:h-[661px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] shadow-bs1 w-[83%]">
          <Row className="absolute items-center justify-between left-[0] top-[0] w-[45%]">
            <Row className="bg-deep_orange_500 justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[49%]">
              <Img
                src="images/img_airplane_38X38.svg"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                alt="airplane"
              />
              <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mr-[31px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[4px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                Flights
              </Text>
            </Row>
            <Row className="bg-white_A700 justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[49%]">
              <Img
                src="images/img_car.svg"
                className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[23%]"
                alt="car"
              />
              <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                Cars Rental
              </Text>
            </Row>
          </Row>
          <Column className="absolute bg-white_A700 border-4 border-deep_orange_500 border-solid bottom-[0] font-baloobhai justify-end lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius15 w-[100%]">
            <Row className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mr-[auto] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[80%]">
              <Text className="font-medium mb-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                From
              </Text>
              <Text className="font-medium lg:ml-[259px] xl:ml-[297px] 2xl:ml-[334px] 3xl:ml-[401px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                To
              </Text>
              <Text className="font-medium lg:ml-[242px] xl:ml-[277px] 2xl:ml-[312px] 3xl:ml-[374px] my-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                No. of Passengers
              </Text>
            </Row>
            <Column className="ml-[1px] lg:mr-[24px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[97%]">
              <Row className="items-center w-[100%]">
                <Row className="bg-white_A700 border-4 border-deep_orange_500 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius15 w-[26%]">
                  <Img
                    src="images/img_airplane_27X35.svg"
                    className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mb-[2px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[13%]"
                    alt="airplane One"
                  />
                  <Text className="font-medium lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    LONDON
                  </Text>
                </Row>
                <Img
                  src="images/img_globe.svg"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="globe"
                />
                <Input
                  className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:ml-[22px] 3xl:ml-[26px] flex lg:ml-[17px] w-[26%] xl:ml-[19px]"
                  name="Group136"
                  placeholder="HO CHI MINH"
                  prefix={
                    <Img
                      src="images/img_checkmark_25X35.svg"
                      className="lg:w-[27px] lg:ml-[3px] lg:mr-[26px] xl:w-[31px] xl:ml-[4px] xl:mr-[30px] 2xl:w-[35px] 2xl:ml-[5px] 2xl:mr-[34px] 3xl:w-[42px] 3xl:ml-[6px] 3xl:mr-[40px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder15"
                  size="sm"
                ></Input>
                <Input
                  className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:ml-[58px] 3xl:ml-[69px] flex lg:ml-[45px] mb-[1px] w-[34%] xl:ml-[51px]"
                  name="Group138"
                  placeholder="1 Adult, 0 Child, 0 Infant"
                  prefix={
                    <Img
                      src="images/img_user_23X33.svg"
                      className="ml-[4px] lg:w-[25px] lg:mr-[18px] xl:w-[29px] xl:mr-[21px] 2xl:w-[33px] 2xl:mr-[24px] 3xl:w-[39px] 3xl:mr-[28px] my-[auto]"
                      alt="user"
                    />
                  }
                  shape="RoundedBorder15"
                ></Input>
              </Row>
              <Row className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[75%]">
                <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Departure Date
                </Text>
                <CheckBox
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] mt-[1px]"
                  inputClassName="h-[29.17px] mr-[5px] w-[29.17px]"
                  name="bx"
                  label=""
                ></CheckBox>
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Return Date
                </Text>
                <Text className="font-medium lg:ml-[141px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Seat Class
                </Text>
              </Row>
              <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[26%]"
                  leftIcon={
                    <Img
                      src="images/img_group.svg"
                      className="text-center lg:w-[22px] lg:h-[23px] lg:mr-[9px] xl:w-[25px] xl:h-[26px] xl:mr-[10px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[12px] 3xl:w-[34px] 3xl:h-[35px] 3xl:mr-[14px]"
                      alt="Group"
                    />
                  }
                  variant="OutlineDeeporange500"
                >
                  <div className="bg-transparent font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    14 September 2022
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[93px] 3xl:ml-[111px] flex items-center justify-center lg:ml-[72px] text-center w-[26%] xl:ml-[82px]"
                  leftIcon={
                    <Img
                      src="images/img_group.svg"
                      className="text-center lg:w-[22px] lg:h-[23px] lg:mr-[14px] xl:w-[25px] xl:h-[26px] xl:mr-[16px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[19px] 3xl:w-[34px] 3xl:h-[35px] 3xl:mr-[22px]"
                      alt="Group"
                    />
                  }
                  variant="OutlineDeeporange500"
                >
                  <div className="bg-transparent font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    14 September 2022
                  </div>
                </Button>
                <SelectBox
                  className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[34%]"
                  placeholderClassName="text-deep_orange_500"
                  name="Group133"
                  placeholder="Economy"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_call.svg"
                        className="lg:w-[19px] lg:h-[26px] lg:mr-[20px] xl:w-[22px] xl:h-[30px] xl:mr-[23px] 2xl:w-[25px] 2xl:h-[34px] 2xl:mr-[26px] 3xl:w-[30px] 3xl:h-[40px] 3xl:mr-[31px]"
                        alt="call"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown_deep_orange_500.svg"
                      className="lg:w-[19px] lg:h-[12px] lg:mr-[21px] xl:w-[22px] xl:h-[14px] xl:mr-[24px] 2xl:w-[25px] 2xl:h-[16px] 2xl:mr-[27px] 3xl:w-[30px] 3xl:h-[19px] 3xl:mr-[32px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder15"
                  size="md"
                  variant="OutlineDeeporange500"
                ></SelectBox>
              </Row>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="2xl:ml-[801px] 2xl:mt-[84px] 3xl:ml-[961px] 3xl:mt-[100px] flex lg:ml-[623px] lg:mt-[65px] w-[27%] xl:ml-[712px] xl:mt-[74px]"
                name="Group137"
                placeholder="Search Flights"
                prefix={
                  <Img
                    src="images/img_search_white_A700.svg"
                    className="cursor-pointer lg:w-[24px] lg:h-[25px] lg:ml-[7px] lg:mr-[20px] xl:w-[27px] xl:h-[28px] xl:ml-[8px] xl:mr-[23px] 2xl:w-[31px] 2xl:h-[32px] 2xl:ml-[10px] 2xl:mr-[26px] 3xl:w-[37px] 3xl:h-[38px] 3xl:ml-[12px] 3xl:mr-[31px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#ffffff"
                      className="cursor-pointer lg:w-[24px] lg:h-[25px] lg:ml-[7px] lg:mr-[17px] xl:w-[27px] xl:h-[28px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[31px] 2xl:h-[32px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[37px] 3xl:h-[38px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcCircleBorder35"
                size="smSrc"
                variant="srcFillDeeporange500"
              ></Input>
            </Column>
          </Column>
        </Stack>
        <Row className="font-tirobangla lg:mt-[133px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] w-[92%]">
          <Column className="mt-[2px] w-[39%]">
            <Text className="font-normal ml-[1px] not-italic lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-teal_300 w-[auto]">
              Airline Partners
            </Text>
            <Text className="font-normal italic leading-[normal] ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[80%]">
              Domestic & International Airline Partners
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-black_900 w-[95%]">
              We are partnering with various airlines across the globe to get
              you to wherever you need to be.
            </Text>
          </Column>
          <Img
            src="images/img_image1.png"
            className="lg:h-[238px] xl:h-[273px] 2xl:h-[307px] 3xl:h-[368px] rounded-radius32 w-[61%]"
            alt="imageOne"
          />
        </Row>
        <Line className="bg-deep_orange_500_cc h-[2px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[92%]" />
        <Text className="font-normal lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] not-italic lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-teal_300 w-[auto]">
          Popular Route
        </Text>
        <Row className="font-tirobangla items-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[87%]">
          <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
        </Row>
        <Row className="font-tirobangla items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[87%]">
          <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
        </Row>
        <Row className="font-tirobangla items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[87%]">
          <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
        </Row>
        <Row className="font-tirobangla items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[87%]">
          <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
        </Row>
        <Row className="font-tirobangla items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[87%]">
          <Text className="font-normal italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
          <Text className="font-normal italic lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
            {" "}
            Cheap Ticket New York to LonDon
          </Text>
        </Row>
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
                  alt="checkmark One"
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
                  style={{ backgroundImage: "url('images/img_group228.svg')" }}
                >
                  <Input
                    className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                    wrapClassName="2xl:ml-[418px] 2xl:mt-[56px] 3xl:ml-[501px] 3xl:mt-[67px] lg:ml-[325px] lg:mt-[43px] w-[26%] xl:ml-[371px] xl:mt-[49px]"
                    type="email"
                    name="Group141"
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
                  onClick={handleNavigate4}
                  alt="facebook"
                />
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[18%] top-[6%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  onClick={handleNavigate5}
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

export default DesktopThirtyPage;
