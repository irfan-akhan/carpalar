import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
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
			minW="20%"
			// bgColor="red"
			borderRadius="10"
			cursor="pointer"
			boxShadow="dark-lg"
			onClick={(e) => {
				router.push("/singlecar");
			}}
		>
			<Flex flexDir="column" justifyContent="center">
				<Image src="/toyota.png" height={200} width={260} />
				<Flex
					flexDir="column"
					justifyContent="center"
					bg="#253241"
					color="#fff"
					py="3"
				>
					<Text fontWeight="bold" textAlign="center">
						Audi RS4
					</Text>

					<Spacer />
					<Flex
						justifyContent="space-between"
						p="5"
						textAlign="center"
						color="gray.400"
					>
						<Text>20000</Text>
						<Text>Diesel</Text>
						<Text>Automatic</Text>
					</Flex>
					<Text fontWeight="bold" textAlign="center">
						$994,000
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
