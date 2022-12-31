import React from "react";

import { Column, Row, Img, Text, Line, Button, Stack, Input } from "components";

const DesktopEighteenPage = () => {
  return (
    <>
      <Column className="bg-yellow_50 font-tirobangla mx-[auto] 3xl:pb-[110px] lg:pb-[71px] xl:pb-[81px] 2xl:pb-[92px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] shadow-bs5 w-[100%]">
              <Img
                src="images/img_rectangle1.png"
                className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] my-[2px] w-[20%]"
                alt="RectangleTwentyThree"
              />
              <Text className="bg-deep_orange_500 hover:bg-gray_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center hover:justify-center lg:ml-[426px] xl:ml-[487px] 2xl:ml-[548px] 3xl:ml-[657px] not-italic 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-gray_500 text-white_A700 w-[35px]">
                1
              </Text>
              <Text className="hover:bg-gray_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 hover:text-gray_500 w-[auto]">
                Book
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[6%]" />
              <Text className="bg-deep_orange_500 hover:bg-gray_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center hover:justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] not-italic 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-gray_500 text-white_A700 w-[35px]">
                2
              </Text>
              <Text className="hover:bg-gray_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 hover:text-gray_500 w-[auto]">
                Pay
              </Text>
              <Line className="bg-deep_orange_500 h-[3px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[6%]" />
              <Text className="bg-gray_500 cursor-pointer flex hover:font-normal font-normal font-telex items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] rounded-radius50 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] hover:text-gray_500 text-white_A700 w-[35px]">
                3
              </Text>
              <Text className="hover:bg-gray_500 cursor-pointer hover:font-normal font-normal font-tirobangla italic hover:justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                E-ticket
              </Text>
            </Row>
          </header>
        </Column>
        <Column className="items-end lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:px-[39px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[100%]">
          <Column className="items-center w-[95%]">
            <Row className="items-center w-[98%]">
              <Text className="font-normal not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-teal_300 w-[auto]">
                Payment
              </Text>
              <Img
                src="images/img_vector_46X172.png"
                className="lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[541px] xl:ml-[619px] 2xl:ml-[696px] 3xl:ml-[835px] w-[14%]"
                alt="Vector"
              />
              <Img
                src="images/img_logosmastercar.svg"
                className="lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[12%]"
                alt="logosmastercar"
              />
            </Row>
            <Row className="justify-evenly lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[100%]">
              <Column className="w-[70%]">
                <Column className="bg-white_A700 font-tirobangla lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 shadow-bs4 w-[89%]">
                  <Row className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[95%]">
                    <Text className="font-normal font-tirobangla lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-teal_300 w-[auto]">
                      Credit Card
                      <br />
                    </Text>
                    <Button
                      className="font-baloo font-medium lg:ml-[256px] xl:ml-[293px] 2xl:ml-[330px] 3xl:ml-[396px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center w-[6%]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      1
                    </Button>
                    <Button
                      className="font-baloo font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center w-[6%]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      0
                    </Button>
                    <Text className="font-baloo font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-deep_orange_500 w-[auto]">
                      :
                    </Text>
                    <Button
                      className="font-baloo font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center w-[6%]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      1
                    </Button>
                    <Button
                      className="font-baloo font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center w-[6%]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      0
                    </Button>
                  </Row>
                  <Text className="font-normal lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_500 w-[auto]">
                    Cardhoder Name
                  </Text>
                  <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius32 w-[95%]">
                    <Img
                      src="images/img_clock_40X40.svg"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[3px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="clock"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                      Enter Cardholder Name
                    </Text>
                  </Row>
                  <Row className="font-tirobangla items-end lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[87%]">
                    <Stack className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mb-[1px] w-[27%]">
                      <Text className="absolute font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_500 w-[auto]">
                        Cart Number
                      </Text>
                      <Text className="absolute font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_500 w-[auto]">
                        Cart Number
                      </Text>
                    </Stack>
                    <Text className="font-normal italic xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      (Enter the 16-digit card number on the card)
                    </Text>
                  </Row>
                  <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid font-baloo items-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[95%]">
                    <Img
                      src="images/img_file.svg"
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] w-[6%]"
                      alt="file"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                      0000 - 0000 - 0000 - 0000
                    </Text>
                  </Row>
                  <Row className="font-tirobangla items-end justify-end lg:mb-[50px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[78px] ml-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[90%]">
                    <Column className="w-[52%]">
                      <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_500 w-[auto]">
                        CVV Number
                      </Text>
                      <Text className="font-normal italic leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[100%]">
                        (Enter the 3 or 4 digit number on the card)
                      </Text>
                      <Text className="font-normal lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_500 w-[auto]">
                        Expiry Date
                      </Text>
                      <Text className="font-normal italic leading-[normal] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[97%]">
                        (Enter the expiration date of the card)
                      </Text>
                    </Column>
                    <Column className="font-baloo items-end mb-[4px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[47%]">
                      <Row className="bg-white_A700 border-bw5 border-deep_orange_500 border-solid items-center justify-end ml-[auto] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius32 w-[85%]">
                        <Img
                          src="images/img_close_26X26.svg"
                          className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          alt="close"
                        />
                        <Text className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] 3xl:mr-[110px] lg:mr-[71px] xl:mr-[81px] 2xl:mr-[92px] mt-[2px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-deep_orange_500 w-[auto]">
                          333
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]">
                        <Button
                          className="font-medium lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center text-deep_orange_500 w-[44%]"
                          shape="RoundedBorder33"
                          size="xl"
                          variant="OutlineDeeporange5001_2"
                        >
                          20
                        </Button>
                        <Text className="font-medium lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-deep_orange_500 w-[auto]">
                          /
                        </Text>
                        <Button
                          className="font-medium lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center text-deep_orange_500 w-[44%]"
                          shape="RoundedBorder33"
                          size="xl"
                          variant="OutlineDeeporange5001_2"
                        >
                          02
                        </Button>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <footer className="bg-white_A700 font-tirobangla lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] rounded-radius15 shadow-bs1 w-[89%]">
                  <Row className="justify-between lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[42px] xl:mr-[48px] 2xl:mr-[55px] 3xl:mr-[66px] lg:my-[35px] xl:my-[40px] 2xl:my-[46px] 3xl:my-[55px] w-[90%]">
                    <Text className="font-normal mt-[3px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-deep_orange_500 w-[auto]">
                      Total Price
                    </Text>
                    <Text className="font-normal not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
                      $ 1000
                    </Text>
                  </Row>
                </footer>
                <Button className="font-baloo1 font-normal lg:ml-[320px] xl:ml-[366px] 2xl:ml-[412px] 3xl:ml-[494px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[43%]">
                  Pay now
                </Button>
              </Column>
              <Column className="bg-white_A700 justify-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius15 shadow-bs1 w-[30%]">
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-teal_300 w-[auto]">
                  Car Rental without Driver
                </Text>
                <Line className="bg-deep_orange_500 h-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]" />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  ID: 123456789
                </Text>
                <Line className="bg-deep_orange_500 h-[2px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[98%]" />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Mr. Nguyen Van A
                </Text>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  0123456789
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[13px] ml-[4px] w-[98%] xl:mt-[15px]"
                  type="email"
                  name="email"
                  placeholder="nguyenvana@gmail.com"
                  size="lg"
                  variant="UnderLineDeeporange500"
                ></Input>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  Driver{" "}
                </Text>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Mr. Nguyen Van B
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[10px] ml-[3px] w-[98%] xl:mt-[11px]"
                  type="number"
                  name="mobileNo One"
                  placeholder="9876543210"
                  size="lg"
                  variant="UnderLineDeeporange500"
                ></Input>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Mercedes Benz C300 AMG
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-deep_orange_500 text-deep_orange_500 w-[100%]"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] ml-[4px] w-[98%] xl:mt-[10px]"
                  name="Group301"
                  placeholder="Manual"
                  size="xl"
                  variant="UnderLineDeeporange500"
                ></Input>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  Rental City/Region
                </Text>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  London
                </Text>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  Start Date & Time
                </Text>
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Mon, 19 September 2022 • 09:00
                </Text>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  Pickup Location
                </Text>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Tower of London{" "}
                </Text>
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  End Date & Time
                </Text>
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  Wed, 21 September 2022 • 09:00
                </Text>
                <Text className="font-normal ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                  Drop-off Location
                </Text>
                <Text className="font-normal lg:mb-[31px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] ml-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                  London Eye
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DesktopEighteenPage;
