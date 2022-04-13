import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function Howitworks() {
	return (
		<Box
			my="5%"
			display="flex"
			flexDirection="column"
			alignItems="center"
			p="5%"
			color="white"
			bg="black"
			id="howitworks"
		>
			<Heading as="h5" textTransform="capitalize" size="2xl">
				How it works
			</Heading>
			<Text mt="2" mb="5%">
				3 simple steps with no hassle
			</Text>
			<Flex
				maxW="70vw"
				color="black"
				justifyContent="space-between"
				textAlign="center"
			>
				<Box width="25%">
					<Image
						mb="40"
						src="/number-1.png"
						height={50}
						width={50}
						alt="salary"
					/>
					<Flex
						borderRadius="5"
						p="10"
						bg="white"
						flexDir="column"
						alignItems="center"
						height="50vh"
					>
						<Image
							mb="40"
							src="/partner.png"
							height={120}
							width={120}
							alt="salary"
						/>
						<Text mt="10">
							Partner with your proposed vehicle Appropriate
							documentation necessary
						</Text>
					</Flex>
				</Box>
				<Box width="25%">
					<Image
						mb="40"
						src="/number-2.png"
						height={50}
						width={50}
						alt="salary"
					/>
					<Flex
						borderRadius="5"
						p="10"
						bg="white"
						minH="50vh"
						flexDir="column"
						alignItems="center"
					>
						<Image
							mb="40"
							src="/partner.png"
							height={120}
							width={120}
							alt="salary"
						/>
						<Text mt="10">
							We match your car with an honest and competent
							driver
						</Text>
					</Flex>
				</Box>
				<Box width="25%">
					<Image
						mb="40"
						src="/number-3.png"
						height={50}
						width={50}
						alt="salary"
					/>
					<Flex
						borderRadius="5"
						p="10"
						bg="white"
						flexDir="column"
						alignItems="center"
						minH="50vh"
					>
						<Image
							mb="40"
							src="/partner.png"
							height={120}
							width={120}
							alt="salary"
						/>
						<Text mt="10">Earn weekly with no hidden charges.</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
