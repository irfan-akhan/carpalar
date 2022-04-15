import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import ExploreCard from "./ExploreCard";

export default function Explore() {
	const [notSmallerScreen] = useMediaQuery("(min-width:768px)");
	return (
		<Box pb="20">
			<Flex
				alignItems="center"
				p="10"
				flexDir="column"
				textAlign="center"
				pb="20"
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
				<Text
					px={notSmallerScreen ? "20%" : "10%"}
					py="5"
					fontSize="20"
				>
					With Carpalar, a variety of luxurious cars are assured! Our
					customers enjoy the opportunity to select from a wide range
					of car brands, sizes, colors and shapes. Our cars and buses
					have all the necessary documents and are in their perfect
					conditions.
				</Text>
			</Flex>

			<Flex
				mt="-4"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				width="80vw"
				margin="auto"
			>
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />
				<ExploreCard />

				<Button
					mt="10"
					textAlign="center"
					variant="solid"
					className="primaryButton"
				>
					SHOW MORE
				</Button>
			</Flex>
		</Box>
	);
}
