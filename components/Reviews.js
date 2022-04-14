import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function Reviews() {
	const [notSmallerScreen] = useMediaQuery("(min-width:768px)");

	return (
		<Box
			mt="5%"
			display="flex"
			flexDirection="column"
			alignItems="center"
			p="7%"
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
				textAlign="center"
			>
				What people are saying
			</Heading>

			<Flex
				maxW="70vw"
				color="black"
				justifyContent="center"
				flexDir={notSmallerScreen ? "row" : "column"}
			>
				<Flex
					width={notSmallerScreen ? "25%" : "100%"}
					height={notSmallerScreen ? "40vh" : "fit-content"}
					mt="10"
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
						<Box ml="5" w={notSmallerScreen ? "60%" : "90%"}>
							<Text>Mr Khan</Text>
						</Box>
					</Flex>
					<Text
						mt="5"
						fontWeight={notSmallerScreen ? "medium" : "medium"}
						fontStyle="italic"
					>
						{`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
					</Text>
				</Flex>
				<Flex
					width={notSmallerScreen ? "25%" : "100%"}
					height={notSmallerScreen ? "40vh" : "fit-content"}
					mt="10"
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
						<Box ml="5" width={notSmallerScreen ? "25%" : "100%"}>
							<Text>Mr Tunde Ojobaro</Text>
						</Box>
					</Flex>
					<Text
						mt="5"
						fontWeight={notSmallerScreen ? "medium" : "medium"}
						fontStyle="italic"
					>
						{`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
					</Text>
				</Flex>
				<Flex
					mt="10"
					width={notSmallerScreen ? "25%" : "100%"}
					height={notSmallerScreen ? "40vh" : "fit-content"}
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
						<Box ml="5" width={notSmallerScreen ? "60%" : "90%"}>
							<Text>Mr Tunde Ojobaro</Text>
						</Box>
					</Flex>
					<Text
						mt="5"
						fontWeight={notSmallerScreen ? "medium" : "medium"}
						fontStyle="italic"
					>
						{`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
