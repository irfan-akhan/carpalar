import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Shop() {
	return (
		<Box>
			<Flex
				alignItems="center"
				p="10"
				flexDir="column"
				textAlign="center"
			>
				<Heading as="h1" textTransform="uppercase" fontSize="40">
					EXPLORE CARS
				</Heading>
				<div
					style={{
						width: "200px",
						padding: "1.4px",
						backgroundColor: "#acb7fb",
					}}
				></div>
				<Text px="10%" py="5" fontSize="20">
					With Carpalar, a variety of luxurious cars are assured! Our
					customers enjoy the opportunity to select from a wide range
					of car brands, sizes, colors and shapes. Our cars and buses
					have all the necessary documents and are in their perfect
					conditions.
				</Text>
			</Flex>
		</Box>
	);
}
