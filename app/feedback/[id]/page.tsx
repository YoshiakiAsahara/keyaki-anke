import React from "react";
import selectFeedback from "@/app/actions/selectFeedback"; // selectFeedbackをインポート
const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const feedback = await selectFeedback(params);
    if (!feedback) {
      return <div>フィードバックが見つかりませんでした。</div>;
    }
    return (
      <div>
        <h1>フィードバック</h1>
        <p>{feedback.comment}</p>
        <p>
          {new Date(feedback.createdAt).toLocaleString("ja-JP", {
            timeZone: "Asia/Tokyo",
          })}
        </p>
      </div>
    );
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return <div>エラーが発生しました。</div>;
  }
};
export default Page;
