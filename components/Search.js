import { Box, Button, Container, Select } from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
export default function Search() {
	return (
		<Container
			borderRadius="5"
			mt="-16"
			minw="50vw"
			maxW="60vw"
			bg="white"
			minH="20vh"
			maxH="20vh"
			boxShadow="lg"
			centerContent
			display="flex"
			flexDirection="row"
			justifyContent="space-evenly"
			alignItems="center"
			mb="20"
		>
			<Select maxW="25%" variant="filled" placeholder="Select Make">
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>

			<Select maxW="25%" variant="filled" placeholder="Select Model">
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>

			<Select maxW="25%" variant="filled" placeholder="Select Type">
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>
			<Button
				className="primaryButton"
				px="10"
				fontWeight="normal"
				size="lg"
				colorScheme="blue"
			>
				<BiSearchAlt /> &nbsp; SEARCH
			</Button>
		</Container>
	);
}
