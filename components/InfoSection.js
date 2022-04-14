import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function InfoSection() {
	const [notSmallerScreen] = useMediaQuery("(min-width:768px)");
	// console.log("notSmallerScreen", notSmallerScreen);
	return (
		<Box
			mb="20"
			display="flex"
			flexDir={notSmallerScreen ? "row" : "column"}
			justifyContent="space-between"
			alignItems="center"
			px={notSmallerScreen ? "100" : "10"}
			minH="110vh"
			// width="80vw"
		>
			<Box
				maxW={notSmallerScreen ? "45vw" : "100%"}
				px={notSmallerScreen ? "30" : "0"}
			>
				<Heading
					textAlign="center"
					as="h2"
					size={notSmallerScreen ? "2xl" : "lg"}
					mb="10"
					textTransform="capitalize"
				>
					easy finance facilities with carpalar
				</Heading>
				<Text fontSize="2xl">
					We understand how much an individual strive to purchase a
					vehicle. With Carpalar, No hefty down payment of vehicles.
					Start driving as private hire, earn fare to settle your
					Drive-to-Own payments weekly with ease.
				</Text>
				<Text fontSize="2xl" mt="5">
					Get started by subscribing to our Drive-to-Own Plan.
				</Text>
			</Box>
			<Box>
				<Flex px="50" flexWrap="wrap" flexDir="row">
					<Box
						minW={notSmallerScreen ? "45%" : "100%"}
						mr="5"
						boxShadow="lg"
						mb="5"
						mt="5"
						padding="5"
						borderRadius="10"
					>
						<Image
							src="/payment-method.png"
							width={120}
							height={120}
							alt="payment method"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Flexible weekly payment plan
						</Text>
					</Box>
					<Box
						minW={notSmallerScreen ? "45%" : "100%"}
						mr="5"
						mt="5"
						boxShadow="lg"
						mb="5"
						padding="5"
						borderRadius="10"
					>
						<Image
							src="/payment-method.png"
							width={120}
							height={120}
							alt="payment method"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Flexible weekly payment plan
						</Text>
					</Box>
					<Box
						minW={notSmallerScreen ? "45%" : "100%"}
						mr="5"
						mt="5"
						boxShadow="lg"
						mb="5"
						padding="5"
						borderRadius="10"
					>
						<Image
							src="/payment-method.png"
							width={120}
							height={120}
							alt="payment method"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Flexible weekly payment plan
						</Text>
					</Box>
					<Flex
						justifyContent="center"
						alignItems="center"
						minW={notSmallerScreen ? "45%" : "100%"}
						mr="5"
						boxShadow="lg"
						mb="5"
						mt="5"
						padding="5"
						borderRadius="10"
					>
						<Image
							src="/payment-method.png"
							width={120}
							height={120}
							alt="payment method"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Flexible weekly payment plan
						</Text>
					</Flex>
					{/* <Box boxShadow="lg" mb="5" maxW="45%" mr="5">
						<Image
							src="/salary.png"
							width={120}
							height={120}
							alt="deposit"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Affordable & Low Deposit
						</Text>
					</Box>

					<Box boxShadow="lg" mb="5" mr="5">
						<Image
							src="/interest.png"
							width={120}
							height={120}
							alt="interest"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							No interest rate
						</Text>
					</Box>
					<Box boxShadow="lg" mb="5" mr="5">
						<Image
							src="/deal.png"
							width={120}
							height={120}
							alt="keys"
						/>
						<Text
							textAlign="center"
							my="5"
							color="white"
							as="h4"
							bgColor="blue"
						>
							Access to a Car
						</Text>
					</Box> */}
				</Flex>
			</Box>
		</Box>
	);
}
