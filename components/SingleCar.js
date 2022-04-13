import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function SIngleCar() {
	return (
		<Flex justifyContent="space-between" p="40">
			<Stack>
				<Heading
					as="h2"
					size="2xl"
					textTransform="uppercase"
					fontWeight="bold"
					mb="2"
				>
					Mustang B3 aouf
				</Heading>
				<Text
					fontSize="30"
					width="fit-content"
					bgColor="black"
					color="#fff"
					p="3"
					mb="6"
					fontWeight="bolder"
				>
					$305,000
				</Text>
				<Flex justifyContent="space-between">
					<Text fontWeight="medium">Mileage:&nbsp;</Text>
					<Text color="gray.600">25 000 km</Text>
				</Flex>{" "}
				<hr />
				<Flex justifyContent="space-between">
					<Text fontWeight="medium">Transmission:&nbsp;</Text>
					<Text color="gray.600">Manual</Text>
				</Flex>
				<hr />
				<Flex justifyContent="space-between">
					<Text fontWeight="medium">Color:&nbsp;</Text>
					<Text color="gray.600">Black</Text>
				</Flex>
				<hr />
				<Flex justifyContent="space-between">
					<Text fontWeight="medium">Body:&nbsp;</Text>
					<Text color="gray.600">Hatchback</Text>
				</Flex>
				<hr />
				<Flex justifyContent="space-between">
					<Text fontWeight="medium">Fuel:&nbsp;</Text>
					<Text color="gray.600">Gasoline</Text>
				</Flex>
				<hr />
				<Button
					width="fit-content"
					variant="solid"
					className="primaryButton"
				>
					BUY NOW
				</Button>
			</Stack>
			<Image src="/vehicle.webp" width={550} height={350} />I
		</Flex>
	);
}
