// import React from "react";
// import selectFeedback from "@/app/actions/selectFeedback";
// import { Container, Typography } from "@mui/material";
// import PutFormContainer from "@/app/components/PutFormContainer";
// const Page = async ({ params }: { params: { id: string } }) => {
//   try {
//     const feedback = await selectFeedback(params);
//     if (!feedback) {
//       return <div>フィードバックが見つかりませんでした。</div>;
//     }
//     return (
//       <Container>
//         <Typography my={3} textAlign="center" fontWeight="bold" fontSize={25}>
//           ↓↓感想を編集できます！↓↓
//         </Typography>
//         <PutFormContainer
//           feedbackId={params.id}
//           initialFeedback={feedback.comment}
//         />
//       </Container>
//     );
//   } catch (error) {
//     console.error("エラーが発生しました:", error);
//     return <div>エラーが発生しました。</div>;
//   }
// };
// export default Page;
