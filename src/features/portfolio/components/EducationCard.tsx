import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BodyText } from './BodyText'

type EducationCardProps = {
    education: any
}

export const EducationCard = ({ education }: EducationCardProps) => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            bg={"#011221"}
            border="1px solid #1E2D3D"
            overflow={"hidden"}
        >
            <Box display={"flex"} padding={"24px"} paddingBottom={0} gap={4}>
                <Box width={"100px"} height="100px">
                    <Image
                        borderRadius={10}
                        objectFit='cover'
                        src={education.logo}
                        alt={education.name}
                    />
                </Box>
                <Box display={"flex"} flexDirection="column">
                    <BodyText color={"#fff"} flexGrow={1} fontSize={20}>
                        {education.name}
                    </BodyText>
                    <BodyText color={"#4D5BCE"} flexGrow={1}>
                        {education.title}
                    </BodyText>
                    <BodyText color={"#fff"} flexGrow={1}>
                        {education.year}
                    </BodyText>
                </Box>
            </Box>
            <Box
                padding={"24px"}
                display="flex"
                flexDirection={"column"}
                height="100%"
                gap={5}
            >
                <BodyText color={"#607B96"} flexGrow={1}>
                    {education.description}
                </BodyText>
                <Button
                    as="a"
                    bg={"#1C2B3A"}
                    color="white"
                    width={"fit-content"}
                    href={
                        education.profile
                    }
                    target="_blank"
                    rel="noreferrer"
                    disabled={education.profile === ""}
                >
                    view-profile
                </Button>
            </Box>
        </Box>
    )
}
