import React from "react";

import { Column, Row, Img, Text, Button, Stack, Line, Input } from "components";

const DesktopNinePage = () => {
  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate14() {
    window.location.href = "https://www.facebook.com/login/";
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
          <Stack
            className="bg-cover bg-repeat lg:h-[326px] xl:h-[373px] 2xl:h-[420px] 3xl:h-[504px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[252px] xl:px-[289px] 2xl:px-[325px] 3xl:px-[390px] w-[100%]"
            style={{
              backgroundImage: "url('images/img_group16_419X1440.png')",
            }}
          >
            <Img
              src="images/img_rectangle1.png"
              className="absolute 3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] inset-x-[0] mx-[auto] top-[0] w-[19%]"
              alt="RectangleTwentyFive"
            />
          </Stack>
          <Row className="lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[93%]">
            <Column className="bg-white_A700 lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius32 w-[71%]">
              <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[70%]">
                <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  Tour 3 days 2 nights: Vi Vu Nha Trang Beach
                </Text>
                <Img
                  src="images/img_frame3_yellow_A700.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[3px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[34%]"
                  alt="FrameThree"
                />
              </Column>
              <Column className="items-end lg:mb-[22px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mx-[auto] w-[98%]">
                <Line className="bg-deep_orange_500 h-[0.98px] w-[100%]" />
                <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[99%]">
                  <Column className="items-center w-[84%]">
                    <Row
                      className="bg-cover bg-repeat items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group873.svg')",
                      }}
                    >
                      <Text className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                        Time
                      </Text>
                      <Text className="font-normal lg:ml-[134px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] my-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                        Type of tour
                      </Text>
                      <Text className="font-normal 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] my-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                        Group Size
                      </Text>
                    </Row>
                    <Row className="mt-[1px] w-[77%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                        3 days
                      </Text>
                      <Text className="font-normal leading-[normal] lg:ml-[131px] xl:ml-[150px] 2xl:ml-[169px] 3xl:ml-[202px] mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[15%]">
                        Tour in country
                      </Text>
                      <Text className="font-normal lg:ml-[111px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                        20 People
                      </Text>
                    </Row>
                  </Column>
                  <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[14%]">
                    <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                      Location
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      Khanh Hoa
                    </Text>
                  </Column>
                </Row>
                <Line className="bg-deep_orange_500 h-[0.98px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]" />
                <Img
                  src="images/img_rectangle57.png"
                  className="lg:h-[379px] xl:h-[434px] 2xl:h-[488px] 3xl:h-[585px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] rounded-radius32 w-[100%]"
                  alt="RectangleFiftySeven"
                />
                <Row className="items-center justify-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[52%]">
                  <Img
                    src="images/img_rectangle58.png"
                    className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius15 w-[29%]"
                    alt="RectangleFiftyEight"
                  />
                  <Img
                    src="images/img_rectangle59.png"
                    className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] rounded-radius15 w-[29%]"
                    alt="RectangleFiftyNine"
                  />
                  <Img
                    src="images/img_rectangle60.png"
                    className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] rounded-radius15 w-[29%]"
                    alt="RectangleSixty"
                  />
                </Row>
                <Row className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[38%]">
                  <Text className="font-normal mb-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Time:{" "}
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                    3 Days 2 Nights
                  </Text>
                </Row>
                <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[47%]">
                  <Text className="font-normal mb-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Vehicles:
                  </Text>
                  <Text className="font-normal lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] mt-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                    Airplane & Car
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[79%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Departure:
                  </Text>
                  <Text className="font-normal mb-[1px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                    According to customer's request
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[56%]">
                  <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                    Package tour price:
                  </Text>
                  <Text className="font-normal lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_500 w-[auto]">
                    $ 1000 / pax
                  </Text>
                </Row>
                <Text className="font-normal lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  GENERAL INTRODUCTION
                </Text>
                <Text className="font-normal italic leading-[normal] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_500 w-[97%]">
                  Nha Trang is known as Vietnam's sea tourism paradise, famous
                  for its romantic islands and blue beaches that attract
                  tourists from all over the world. The 3 Days 2 Nights Journey
                  will take you to the beautiful City of the Sea -- one of the
                  most beautiful beaches in Southeast Asia.{" "}
                </Text>
                <Row className="justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[97%]">
                  <Line className="bg-deep_orange_500 h-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[12%]" />
                  <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                    Schedule
                  </Text>
                  <Line className="bg-deep_orange_500 h-[4.08px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[68%]" />
                </Row>
                <Row className="justify-between lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[97%]">
                  <Stack className="lg:h-[460px] xl:h-[526px] 2xl:h-[592px] 3xl:h-[710px] w-[4%]">
                    <div className="absolute bg-white_A700 border-bw5 border-deep_orange_500 border-solid lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 top-[0] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                    <Line className="absolute bg-deep_orange_500 bottom-[0] lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] inset-x-[0] mx-[auto] w-[1px]" />
                  </Stack>
                  <Column className="items-center mt-[1px] w-[92%]">
                    <Text className="font-normal leading-[normal] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[100%]">
                      Day 1: Hanoi / Ho Chi Minh – Noi Bai International Airport
                      / Tan Son Nhat – Flight to Cam Ranh – Sightseeing in Nha
                      Trang (Lunch, Dinner)
                    </Text>
                    <Text className="font-normal leading-[normal] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[100%]">
                      Car and tour guide pick you up at the meeting point,
                      depart for Noi Bai / Tan Son Nhat international airport,
                      check-in for flight to Nha Trang.
                      <br />
                      <br />
                      <br />
                      <br />
                      At Cam Ranh airport, car and tour guide pick up guests and
                      take them to have lunch.
                      <br />
                      <br />
                      <br />
                      <br />
                      After lunch, transfer back to the hotel, check in and
                      rest.
                      <br />
                      <br />
                      <br />
                      <br />
                      Afternoon: Depart to visit the famous beauty spots in Nha
                      Trang: <br />
                      <br />
                      <br />
                      Mountain Church: Visit the unique famous French
                      architecture that still retains its historical values.
                      <br />
                      <br />
                      Long Son Pagoda: Is the largest temple in Nha Trang,
                      famous for the largest outdoor white Buddha statue in
                      Vietnam.
                      <br />
                      <br />
                      Ponagar Tower: An ancient architectural work built in 817
                      is a cultural and spiritual symbol of Tram Land - Where
                      everyone can pray for peace for their family.
                      <br />
                      <br />
                      Hon Chong: The place with the most beautiful location to
                      see the panoramic view of Nha Trang Bay.
                      <br />
                      <br />
                      Evening: Have dinner at the restaurant. The group is free
                      to roam the city at night.
                    </Text>
                  </Column>
                </Row>
                <Row className="w-[83%]">
                  <div className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[auto]">
                    Day 2: Canoe tour to visit 3 islands (Breakfast, Lunch,
                    Dinner)
                  </Text>
                </Row>
                <Row className="items-center justify-end ml-[auto] w-[95%]">
                  <Line className="bg-deep_orange_500 lg:h-[582px] xl:h-[666px] 2xl:h-[749px] 3xl:h-[899px] w-[3px]" />
                  <Text className="font-normal leading-[normal] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[93%]">
                    You have breakfast at the hotel.
                    <br />
                    <br />
                    <br />
                    <br />
                    08h00 - 08h30: Tour guide picks you up at the hotel.
                    <br />
                    <br />
                    <br />
                    <br />
                    09h00: Depart for 3-island tour by high-class Canoe, arrive
                    at Hon Mun or Coral Bay
                    <br />
                    <br />
                    <br />
                    <br />
                    You are free to swim, watch the coral and rare marine
                    species with snorkeling goggles. You will know what it feels
                    like to touch live coral with your hands, if you are lucky,
                    you will be able to touch the swimming fish, look closely at
                    the sea urchins and sea cucumbers.
                    <br />
                    <br />
                    Participating in sea games: parachute flying, jet skiing,
                    glass-bottom boat viewing, scuba diving to explore the ocean
                    (expenses excluded).
                    <br />
                    <br />
                    11:30: Arrive at Hon Mot (Fishing Village) . Sightseeing,
                    lunch on the raft with the best quality menu.
                    <br />
                    <br />
                    <br />
                    <br />
                    13h30: Arrive at Bai Tranh, a beautiful, quiet, poetic beach
                    in the middle of the sea.
                    <br />
                    <br />
                    <br />
                    <br />
                    You go to the island to continue swimming or relax on the
                    beach with the sound of waves crashing…
                    <br />
                    <br />
                    Bai Tranh is also known for its unique and adventurous sea
                    game system, such as: Jetski, Kayak, parachute,
                    windsurfing... Bai Tranh is an ideal destination in Nha
                    Trang island tourism.
                    <br />
                    <br />
                    15:30: Car and tour guide take you back to the hotel. <br />
                    <br />
                    <br />
                    <br />
                    18h00 : Have dinner at the restaurant, then free to roam the
                    town at night.
                  </Text>
                </Row>
                <Row className="w-[97%]">
                  <Column className="w-[8%]">
                    <div className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                    <Line className="bg-deep_orange_500 lg:h-[277px] xl:h-[317px] 2xl:h-[357px] 3xl:h-[428px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[3px]" />
                    <div className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                  </Column>
                  <Column className="items-center mt-[3px] w-[92%]">
                    <Text className="font-normal leading-[normal] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-teal_300 w-[100%]">
                      Day 3: Free at Nha Trang – Flight back to Hanoi / Ho Chi
                      Minh (Breakfast, Lunch)
                    </Text>
                    <Text className="font-normal leading-[normal] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[100%]">
                      You have breakfast at the hotel. <br />
                      <br />
                      <br />
                      <br />
                      After that, you are free to swim in the sea and buy
                      specialties as gifts for your loved ones.
                      <br />
                      <br />
                      <br />
                      <br />
                      12h00 You check out and move to a local restaurant for
                      lunch.
                      <br />
                      <br />
                      <br />
                      <br />
                      After lunch, transfer to Cam Ranh airport for the flight
                      to Hanoi / Ho Chi Minh.
                      <br />
                      <br />
                      <br />
                      <br />
                      At Noi Bai / Tan Son Nhat airport, the car and guide will
                      pick you up and take you to the original meeting point.
                      End the trip to Nha Trang 3 days 2 nights.
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius15 w-[26%]">
              <Row className="font-tirobangla items-center justify-between ml-[4px] mt-[2px] w-[95%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                  From
                </Text>
                <Text className="font-normal mt-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                  $ 1000
                </Text>
              </Row>
              <Line className="bg-deep_orange_500 h-[3px] ml-[4px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]" />
              <Text className="font-normal font-tirobangla ml-[4px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                Departure day
              </Text>
              <Text className="font-normal font-tirobangla leading-[normal] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[90%]">
                Departure in all days from May 13, 2021 to August 31, 2021
                <br />
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] ml-[4px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[97%]" />
              <Text className="font-normal font-tirobangla ml-[3px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                Adults
              </Text>
              <Text className="font-normal font-tirobangla leading-[normal] ml-[3px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[92%]">
                Applicable for groups of at least 20 guests
              </Text>
              <Text className="font-normal font-tirobangla lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                $ 1000
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]" />
              <Text className="font-normal font-tirobangla leading-[normal] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[90%]">
                Children 0 - under 4 years old
              </Text>
              <Text className="font-normal font-tirobangla leading-[normal] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[97%]">
                Free up to 2 children, sharing bed with parents
              </Text>
              <Text className="font-normal font-tirobangla lg:ml-[203px] xl:ml-[232px] 2xl:ml-[261px] 3xl:ml-[313px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                $ 0
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]" />
              <Text className="font-normal font-tirobangla leading-[normal] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[91%]">
                Children 5 - under 11 years old
              </Text>
              <Stack className="font-tirobangla 2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[96%]">
                <Text className="absolute bottom-[0] font-normal not-italic right-[0] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                  $ 500
                </Text>
                <Text className="absolute font-normal leading-[normal] left-[0] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 top-[0] w-[89%]">
                  Children sharing bed with parents, maximum 1 child per room
                </Text>
              </Stack>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]" />
              <Text className="font-normal font-tirobangla lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                Children over 11 years old
              </Text>
              <Text className="font-normal font-tirobangla lg:ml-[165px] xl:ml-[189px] 2xl:ml-[213px] 3xl:ml-[255px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                $ 1000
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]" />
              <Text className="font-normal font-tirobangla lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                Single room surcharge
              </Text>
              <Text className="font-normal font-tirobangla lg:ml-[175px] xl:ml-[201px] 2xl:ml-[226px] 3xl:ml-[271px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                $ 650
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[97%]" />
              <Button
                className="font-baloo1 font-normal lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[97%]"
                shape="RoundedBorder10"
                size="md"
              >
                Book now
              </Button>
            </Column>
          </Row>
        </Column>
        <Row className="xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] mr-[auto] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[59%]">
          <Line className="bg-deep_orange_500 h-[3px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[12%]" />
          <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
            Consists of
          </Text>
          <Line className="bg-deep_orange_500 h-[3px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[66%]" />
        </Row>
        <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] 2xl:mr-[1041px] 3xl:mr-[1249px] lg:mr-[809px] xl:mr-[926px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
          TOUR PRICE INCLUDES
        </Text>
        <Text className="font-normal italic leading-[normal] lg:ml-[100px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:mr-[392px] xl:mr-[449px] 2xl:mr-[505px] 3xl:mr-[606px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[56%]">
          Car and guide pick up and drop off the airport in Hanoi / Ho Chi Minh
          <br />
          <br />
          New life seat transport car throughout the journey in Nha Trang
          <br />
          <br />
          Enthusiastic and friendly tour guide throughout the journey
          <br />
          <br />
          4-star hotel, standard 2 people/room, odd male/female triple sleep,
          breakfast included
          <br />
          <br />
          Main meals according to the program: 03 lunches, 02 standard dinners
          150,000++/person
          <br />
          <br />
          Tickets to visit the points in the program
          <br />
          <br />
          Canoe to visit 3 islands
          <br />
          <br />
          Scuba diving equipment
          <br />
          <br />
          Bottle of purified water 0.5l: 01 bottle/person/day.
          <br />
          <br />
          Travel insurance
          <br />
          <br />
          VAT 10%
        </Text>
        <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] 3xl:mr-[1016px] lg:mr-[658px] xl:mr-[753px] 2xl:mr-[847px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
          TOUR PRICE DOES NOT INCLUDE CODE
        </Text>
        <Text className="font-normal italic leading-[normal] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[96px] lg:mr-[493px] xl:mr-[563px] 2xl:mr-[634px] 3xl:mr-[761px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[47%]">
          Round trip airfare Hanoi/Ho Chi Minh – Nha Trang – Hanoi/Ho Chi Minh
          <br />
          <br />
          The cost of playing games on the sea
          <br />
          <br />
          Personal expenses, drinks during meals <br />
          <br />
          Sightseeing, transportation, meals incurred outside the program
        </Text>
        <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] 3xl:mr-[1153px] lg:mr-[747px] xl:mr-[854px] 2xl:mr-[961px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
          TOUR CANCELLATION TERMS
        </Text>
        <Text className="font-normal italic leading-[normal] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[96px] lg:mr-[367px] xl:mr-[419px] 2xl:mr-[472px] 3xl:mr-[566px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[59%]">
          100% of the cost if you cancel the service after booking or signing a
          contract. Deposit is non-refundable in all cases
        </Text>
        <Column className="font-baloobhai items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
          <footer className="w-[100%]">
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
                    name="Group114"
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
                  onClick={handleNavigate14}
                  alt="facebook"
                />
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer absolute lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[18%] top-[5%] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  onClick={handleNavigate8}
                  alt="twitter"
                />
                <Text className="absolute font-semibold left-[31%] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 top-[10%] w-[auto]">
                  New Letter
                </Text>
              </Stack>
            </Stack>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DesktopNinePage;
