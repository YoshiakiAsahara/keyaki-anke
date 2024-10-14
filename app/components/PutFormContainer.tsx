"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostForm from "./PostForm";
import axios from "axios";
type PutFormContainerProps = {
  feedbackId: string;
  initialFeedback: string;
};
const PutFormContainer: React.FC<PutFormContainerProps> = ({
  feedbackId,
  initialFeedback,
}) => {
  const router = useRouter();
  const [feedback, setFeedback] = useState(initialFeedback);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() === "") {
      toast.error("投稿内容を入力してください。");
      return;
    }
    const toastID = toast.info("更新中...");
    try {
      const response = await axios.put(`/api/feedback/${feedbackId}`, {
        comment: feedback,
        createdAt: new Date(),
      });
      if (response.status === 200) {
        toast.dismiss(toastID);
        router.push("/");
        router.refresh();
        toast.success("投稿が更新されました！");
      }
    } catch (error) {
      toast.dismiss(toastID);
      toast.error("更新に失敗しました。");
      console.error("エラー:", error);
    }
  };
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };
  return (
    <PostForm
      feedback={feedback}
      onFeedbackChange={handleFeedbackChange}
      onSubmit={handleSubmit}
    />
  );
};
export default PutFormContainer;
