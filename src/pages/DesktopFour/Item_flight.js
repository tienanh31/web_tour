import React from 'react'

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  CheckBox,
  Grid,
  Input,
} from "components";
const  Item_flight = (props) => {
  return (
  <div>
   <Row className="bg-white_A700 justify-between mx-[auto] lg:my-[18px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[28px] p-[4px] rounded-radius32 shadow-bs2 w-[99%]">
              <Img
                src="images/img_rectangle34.png"
                className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[18%]"
                alt="RectangleThirtyFour"
              />
              <Column className="lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mr-[22px] xl:mr-[25px] 2xl:mr-[29px] 3xl:mr-[34px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[75%]">
                <Text className="font-normal not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_300 w-[auto]">
                  {props.class}
                </Text>
                <Row className="lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                  <Column className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[15%]">
                    <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      {props.timeGo}
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      ({props.locationGo})
                    </Text>
                  </Column>
                  <Stack className="lg:h-[53px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] w-[19%]">
                    <Img
                      src="images/img_group45.svg"
                      className="absolute bottom-[24%] lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]"
                      alt="GroupFortyFive"
                    />
                    <Column className="absolute inset-x-[25%] items-center w-[48%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                        Time
                      </Text>
                      <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                        Direct
                      </Text>
                    </Column>
                  </Stack>
                  <Column className="lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[24%]">
                    <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                      {props.TimeTo}
                    </Text>
                    <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                      ({props.locationTo})
                    </Text>
                  </Column>
                  <Column className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] mt-[1px] w-[32%]">
                    <Img
                      src="images/img_bag.svg"
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[11%]"
                      alt="bag"
                    />
                    <Row className="items-center mt-[2px] w-[100%]">
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[11%]"
                        alt="Vector Four"
                      />
                      <Text className="font-normal 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-deep_orange_500 w-[auto]">
                        $ {props.price}
                      </Text>
                      <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-teal_300 w-[auto]">
                        / pax
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]">
                  <Text className="font-normal font-tirobangla lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Flight Details
                  </Text>
                  <Text className="font-normal font-tirobangla lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Fare & Benefits
                  </Text>
                  <Text className="font-normal font-tirobangla lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_500 w-[auto]">
                    Refund
                  </Text>
                  <Img
                    src="images/img_vector_deep_orange_500.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] w-[3%]"
                    alt="Vector One"
                  />
                  <Button className="font-baloo font-semibold lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] mt-[2px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[21%]">
                    Choose
                  </Button>
                </Row>
              </Column>
            </Row>
    </div>
  )
}
export default Item_flight;