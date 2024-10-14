import React from "react";
import selectFeedback from "@/app/actions/selectFeedback";
import Box from "@mui/material/Box";
import PutFormContainer from "@/app/components/Putformcontainer";
const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const feedback = await selectFeedback(params);
    if (!feedback) {
      return <div>フィードバックが見つかりませんでした。</div>;
    }
    return (
      <Box>
        <PutFormContainer
          feedbackId={params.id}
          initialFeedback={feedback.comment}
        />
      </Box>
    );
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return <div>エラーが発生しました。</div>;
  }
};
export default Page;
