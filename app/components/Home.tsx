import { Box, Container, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import PostFormContainer from "./PostFormContainer";
import { PostType } from "../../types/types";
import Link from "next/link";

type HomeProps = {
  feedbacks: PostType[];
};

const Home: React.FC<HomeProps> = ({ feedbacks }) => {
  return (
    <Container>
      <Typography my={3} textAlign="center" fontWeight="bold" fontSize={25}>
        ↓↓感想をおねがいします！↓↓
      </Typography>
      <PostFormContainer />
      <Box
        height="clamp(200px,50vh,400px)"
        marginTop={4}
        sx={{
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {feedbacks?.map((feedback) => (
          <Link href={`/feedback/${feedback.id}`} key={feedback.id}>
            <FeedbackCard
              comment={feedback.comment}
              createdAt={feedback.createdAt.toLocaleString("ja-JP", {
                timeZone: "Asia/Tokyo",
              })}
            />
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
