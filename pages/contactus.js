import {
	Box,
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";

export default function Contactus() {
	return (
		<Box>
			<Flex
				flexDir="column"
				// justifyContent="center"
				alignItems="center"
				p="10"
				minH="40vh"
				// width="100vw"
				style={{ background: "/salary.png" }}
			>
				<Heading
					textAlign="center"
					size="4xl"
					textTransform="capitalize"
					as="h1"
					width="100%"
					mt="10"
				>
					Contact Us
				</Heading>
				<Text fontSize="2xl" my="2" color="blackAlpha.600">
					WE ARE AT YOUR SERVICE 24*7
				</Text>
			</Flex>
			<Flex px="10%">
				<Box minW="45vw"> MAP</Box>
				<Stack spacing={3}>
					<Text fontWeight="bold" fontSize="2xl">
						Send a Message
					</Text>
					<Text>
						Send a Message to us at any time for queries and
						conserns.
					</Text>
					<Text fontWeight="medium">Your Name*</Text>
					<Input placeholder="Enter your name" size="lg" />
					<Text fontWeight="medium">Your Email*</Text>
					<Input placeholder="Enter your email" size="lg" />
					<Text fontWeight="medium">Message*</Text>
					<Textarea placeholder="Enter Message" size="lg" />
					<Button
						width="fit-content"
						variant="solid"
						colorScheme="blue"
					>
						SEND MESSAGE
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
}
