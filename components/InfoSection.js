import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function InfoSection() {
	return (
		<Box
			mb="20"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			// width="80vw"
		>
			<Box maxW="45vw" px="50">
				<Heading
					textAlign="center"
					as="h2"
					size="2xl"
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
				<Flex px="50" maxW="45vw">
					<Box
						maxW="45%"
						mr="5"
						boxShadow="lg"
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
					<Box maxW="45%" mr="5">
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
				</Flex>
				<Flex px="50" maxW="45vw">
					<Box maxW="45%" mr="5">
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
					<Box maxW="45%" mr="5">
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
					</Box>
				</Flex>
			</Box>
		</Box>
	);
}
