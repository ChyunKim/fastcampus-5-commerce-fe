import Slider from 'react-slick';

import { Box, Button, Container } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function HeaderSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.4,
    slidesToScroll: 1,
  };
  return (
    <Container m="20px 0" p="0">
      <Slider {...settings}>
        <Box>
          <Button variant="orange" w="53px" h="30px" fontSize="12px">
            전체
          </Button>
        </Box>
        <Box>
          <Button variant="orange" h="30px" fontSize="12px">
            바스&샴푸
          </Button>
        </Box>
        <Box>
          <Button variant="orange" w="53px" h="30px" fontSize="12px">
            전체
          </Button>
        </Box>
        <Box>
          <Button variant="orange" w="53px" h="30px" fontSize="12px">
            전체
          </Button>
        </Box>
        <Box>
          <Button variant="orange" w="53px" h="30px" fontSize="12px">
            전체
          </Button>
        </Box>
        <Box>
          <Button variant="orange" w="53px" h="30px" fontSize="12px">
            전체
          </Button>
        </Box>
      </Slider>
    </Container>
  );
}
