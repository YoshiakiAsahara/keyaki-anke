// import { NextResponse } from "next/server";
// import client from "@/lib/prisma";
// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const feedbackId = parseInt(params.id, 10);
//   const body = await req.json();
//   const { comment } = body;
//   try {
//     if (!comment) {
//       return NextResponse.json(
//         { error: "コメントが必要です。" },
//         { status: 400 }
//       );
//     }
//     const updatedFeedback = await client.feedback.update({
//       where: { id: feedbackId },
//       data: {
//         comment,
//         createdAt: new Date(),
//       },
//       select: {
//         comment: true,
//         createdAt: true,
//       },
//     });
//     return NextResponse.json(updatedFeedback);
//   } catch (error) {
//     console.error("フィードバックの更新中にエラーが発生しました:", error);
//     return NextResponse.json(
//       { error: "フィードバックの更新に失敗しました。" },
//       { status: 500 }
//     );
//   }
// }
