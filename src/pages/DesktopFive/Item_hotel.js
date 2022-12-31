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
const  Item_hotel = (props) => {
  return (
  <div>
  <Stack className="lg:h-[235px] xl:h-[269px] 2xl:h-[303px] 3xl:h-[363px] lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Row className="absolute bg-white_A700 bottom-[1%] justify-between lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] rounded-radius32 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_rectangle37.png"
                    className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] lg:w-[233px] xl:w-[266px] 2xl:w-[300px] 3xl:w-[360px]"
                    alt="RectangleThirtySeven"
                  />
                  <Column className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                    <Text className="font-normal leading-[normal] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-teal_300 w-[66%]">
                      {props.name}
                    </Text>
                    <Row className="font-baloo1 items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[45%]">
                      <Button
                        className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[28%]"
                        shape="RoundedBorder19"
                        size="md"
                      >
                            {props.type}
                      </Button>
                      <Img
                        src="images/img_frame3_yellow_A700_29X189.svg"
                        className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[63%]"
                        alt="FrameThree"
                      />
                    </Row>
                    <Row className="font-tirobangla lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Img
                        src="images/img_location_30X30.svg"
                        className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        alt="location Three"
                      />
                      <Text className="font-normal italic 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 w-[auto]">
                        {props.location}
                      </Text>
                      <Text className=" font-normal lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-deep_orange_500 w-[auto]">
                        $ {props.price}
                      </Text>
                      <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_300 w-[auto]">
                        / From day
                      </Text>
                    </Row>
                    <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[96%]">
                      <Img
                        src="images/img_signal.svg"
                        className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mt-[1px] w-[3%]"
                        alt="signal"
                      />
                      <Text className="font-normal font-tirobangla 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                        Wifi
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] w-[3%]"
                        alt="ticket"
                      />
                      <Text className="font-normal font-tirobangla 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                        Air-conditioner
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[3%]"
                        alt="minimize"
                      />
                      <Text className="font-normal font-tirobangla 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                        Couple room
                      </Text>
                      <Button
                        className=" font-baloo1 font-normal xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-center w-[23%]"
                        shape="RoundedBorder26"
                        size="md"
                      >
                        Book
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Line className="absolute bg-deep_orange_500 lg:h-[235px] xl:h-[269px] 2xl:h-[303px] 3xl:h-[363px] right-[21%] w-[2px]" />
              </Stack>
    </div>
  )
}
export default Item_hotel;