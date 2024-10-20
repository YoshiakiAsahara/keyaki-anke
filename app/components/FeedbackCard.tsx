import { Box, Typography } from "@mui/material";

type FeedbackCardProps = {
  comment: string;
  createdAt: string;
};
const FeedbackCard: React.FC<FeedbackCardProps> = ({ comment, createdAt }) => {
  return (
    <Box border={1} borderColor="gainsboro" padding={3} marginBottom={2}>
      <Typography component="h2" textAlign="left" fontSize="18px">
        {comment}
      </Typography>
      <Typography fontSize="14px">
        {new Intl.DateTimeFormat("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date(createdAt))}
      </Typography>
    </Box>
  );
};
export default FeedbackCard;
