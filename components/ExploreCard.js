import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ExploreCard() {
	const router = useRouter();
	return (
		<Box
			zIndex="10"
			m="10"
			minH="35vh"
			minW="17%"
			bgColor="#fff"
			borderRadius="10"
			cursor="pointer"
			onClick={(e) => {
				router.push("/singlecar");
			}}
		>
			<Flex flexDir="column" justifyContent="center" p="4">
				<Image src="/toyota.png" height={150} width={250} />
				<Flex justifyContent="space-between" p="5">
					<Text fontWeight="bold">Audi RS4</Text>
					<Text fontWeight="bold" color="blue">
						$994,000
					</Text>
				</Flex>
				<hr />
				<Flex justifyContent="space-between" p="5">
					<Text color="blackAlpha.700">20000</Text>
					<Text color="blackAlpha.700">Diesel</Text>
					<Text color="blackAlpha.700">Automatic</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
