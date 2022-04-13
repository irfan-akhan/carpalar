import { Flex, Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/HeroBanner.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function HeroBanner() {
	return (
		<>
			<header className={styles.heroBanner}>
				<Heading
					textTransform="uppercase"
					my="10"
					as="h2"
					size="xl"
					textAlign="center"
					color="white"
					maxW="70%"
				>
					Attain your utmost desire,become a car owner with no
					pressured payment plan...
				</Heading>

				<Button my={10} className="primaryButton">
					Explore Cars &nbsp; <FaArrowRight />
				</Button>
			</header>
			<Box
				// justifyContent="center"
				alignItems="center"
				display="flex"
				flexDirection="column"
				bg="black"
				minW="100vw"
				minH="60vh"
			>
				<Heading
					textTransform="uppercase"
					my="16"
					as="h2"
					size="xl"
					color="white"
					textAlign="center"
				>
					Find your dream car
				</Heading>
				<Box
					minW="70vw"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					{/* <Flex
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Image
							src="/cars/suv.png"
							alt="suv car"
							width={100}
							height={100}
						/>
						<Text fontSize="1xl" textTransform="uppercase">
							Suv
						</Text>
					</Flex> */}
					<Flex
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						mx="5"
						color="white"
					>
						<Image
							alt="cabriolet"
							src="/cars/cabriolet.svg"
							width={100}
							height={100}
						/>
						<Text mt="-5" fontSize="1xl" textTransform="uppercase">
							cabriolet
						</Text>
					</Flex>
					<Flex
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						mx="5"
						color="white"
					>
						<Image
							src="/cars/coupe.svg"
							alt="coupe"
							width={100}
							height={100}
						/>
						<Text mt="-5" fontSize="1xl" textTransform="uppercase">
							Coupe
						</Text>
					</Flex>
					<Flex
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						mx="5"
						color="white"
					>
						<Image
							src="/cars/hatchback.svg"
							width={100}
							height={100}
							alt="hatchback"
						/>
						<Text mt="-5" fontSize="1xl" textTransform="uppercase">
							hatchback
						</Text>
					</Flex>
					{/* <Flex
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Image
							src="/cars/minicar.png"
							width={100}
							height={100}
							alt="minicar"
						/>
						<Text fontSize="1xl" textTransform="uppercase">
							minicar
						</Text>
					</Flex>
					<Flex
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
					>
						<Image
							src="/cars/sedan.png"
							alt="sedan"
							width={100}
							height={100}
						/>
						<Text fontSize="1xl" textTransform="uppercase">
							sedan
						</Text>
					</Flex> */}
				</Box>
			</Box>
		</>
	);
}
