import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactStrip() {
	return (
		<Grid boxShadow px={8} templateColumns="repeat(5,1fr)" gap={5}>
			<GridItem
				w="100%"
				p={2}
				display="flex"
				justifyContent="space-around"
				alignItems="center"
			>
				<BsWhatsapp color="green" size={20} />
				<Text color="gray.500">Call: 9090909090</Text>
			</GridItem>
			<GridItem
				w="100%"
				display="flex"
				justifyContent="space-around"
				alignItems="center"
			>
				<HiOutlineMail color="teal" size={20} />
				<Text color="gray.500">Email: email@example.com</Text>
			</GridItem>

			<GridItem w="100%"></GridItem>
			<GridItem w="100%"></GridItem>
			<GridItem
				w="100%"
				display="flex"
				alignItems="center"
				justifyContent="space-evenly"
			>
				<FaWhatsapp color="green" size="20" />
				<FaInstagram color="red" size="20" />
				<FaFacebook color="blue" size="20" />
			</GridItem>
		</Grid>
	);
}
