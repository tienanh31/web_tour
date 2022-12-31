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
const  Item_tour = (props) => {
  return (
  <div>
  
     <Img
                  src="images/img_rectangle26.png"
                  className="lg:h-[161px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[249px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]"
                  alt="RectangleTwentySix"
                />
      <Column className="bg-white_A700 justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[32px] rounded-br-[32px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Text className="font-medium font-poppins lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                    {props.name}{" "}
                  </Text>
                  <Row className="font-poppins ml-[3px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[42%]">
                    <Img
                      src="images/img_location.svg"
                      className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[22px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                      alt="location One"
                    />
                    <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      {props.location}
                    </Text>
                  </Row>
                  <Row className="font-poppins items-end ml-[4px] mr-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      alt="calendar"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      
                      {props.time}
                    </Text>
                  </Row>
                  <Row className="font-poppins items-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mr-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[44%]">
                    <Img
                      src="images/img_user_23X23.svg"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] mb-[4px] lg:w-[17px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                      alt="user"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      {props.member}
                    </Text>
                  </Row>
                  <Text className="font-baloobhai font-medium mb-[1px] lg:ml-[106px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-deep_orange_500 w-[auto]">
                    Cost: $ {props.cost}
                  </Text>
                </Column>
    </div>
  )
}
export default Item_tour;