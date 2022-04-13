import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function Reviews() {
	return (
		<Box
			my="5%"
			display="flex"
			flexDirection="column"
			alignItems="center"
			p="5%"
			color="white"
			bg="black"
			minH="85vh"
		>
			<Heading
				color="#4258ef"
				as="h5"
				textTransform="uppercase"
				size="2xl"
				mb="5%"
			>
				What people are saying
			</Heading>

			<Flex maxW="70vw" color="black" justifyContent="space-between">
				<Flex
					width="25%"
					mt="10"
					height="40vh"
					bg="white"
					borderRadius="5"
					p="5"
					flexDir="column"
					alignItems="flex-start"
				>
					<Flex alignItems="center">
						<Avatar
							size="lg"
							name="Segun Adebayo"
							src="/profile/man2.png"
						/>
						<Box ml="5" w="60%">
							<Text>Mr Khan</Text>
						</Box>
					</Flex>
					<Text mt="5">
						“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”
					</Text>
				</Flex>
				<Flex
					width="25%"
					mt="10"
					height="40vh"
					bg="white"
					borderRadius="5"
					p="5"
					flexDir="column"
					alignItems="flex-start"
				>
					<Flex alignItems="center">
						<Avatar
							size="lg"
							name="Segun Adebayo"
							src="/profile/woman.png"
						/>
						<Box ml="5" w="60%">
							<Text>Mr Tunde Ojobaro</Text>
						</Box>
					</Flex>
					<Text mt="5">
						“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”
					</Text>
				</Flex>
				<Flex
					width="25%"
					mt="10"
					height="40vh"
					bg="white"
					borderRadius="5"
					p="5"
					flexDir="column"
					alignItems="flex-start"
				>
					<Flex alignItems="center">
						<Avatar
							size="lg"
							name="Segun Adebayo"
							src="/profile/man1.png"
						/>
						<Box ml="5" w="60%">
							<Text>Mr Tunde Ojobaro</Text>
						</Box>
					</Flex>
					<Text mt="5">
						“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
