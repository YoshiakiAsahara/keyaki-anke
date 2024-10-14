import client from "@/lib/prisma";
const selectFeedback = async (params: { id: string }) => {
  const feedbackId = parseInt(params.id, 10);
  try {
    const feedback = await client.feedback.findUnique({
      where: { id: feedbackId },
      select: {
        comment: true,
        createdAt: true,
      },
    });
    return feedback;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
    throw error;
  }
};
export default selectFeedback;
