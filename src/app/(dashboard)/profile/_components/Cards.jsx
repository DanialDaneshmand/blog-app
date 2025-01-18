import React from 'react'
import Card from './Card'
import { fetchCardData } from '@/lib/data';
import { HiOutlineChatBubbleBottomCenterText, HiOutlineDocument, HiOutlineUserGroup } from 'react-icons/hi2';

async function Cards() {
    const { numberOfPosts, numberOfUsers, numberOfComments } =
    await fetchCardData();
    return (
        <div className="grid gap-y-6 md:gap-y-0 md:grid-cols-3 gap-x-6">
        <Card
          icon={<HiOutlineUserGroup />}
          title="کاربران"
          value={numberOfUsers}
        />
        <Card
          icon={<HiOutlineDocument />}
          title="پست ها"
          value={numberOfPosts}
        />
        <Card
          icon={<HiOutlineChatBubbleBottomCenterText />}
          title="نظرات"
          value={numberOfComments}
        />
      </div>
    )
}

export default Cards
