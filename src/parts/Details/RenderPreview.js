import React from "react";
import Youtube from "react-youtube";

import Accordion, { IconPlay, IconLock, Item } from "@/components/Accordion";
import Modal from "@/components/Modal";
import Image from "next/image";

export default function RenderPreview({ previews }) {
  return (
    <div className="accordion">
      <Accordion>
        {(Active, toggle) => {
          return previews?.map((item, index) => {
            return (
              <Item
                id={item.id}
                name={item.name}
                child={item.lessons}
                active={Active}
                toggle={toggle}
                key={`${index}-${item.id}`}
              >
                {item?.lessons?.length > 0 &&
                  item.lessons.map((child, index2) => (
                    <div
                      key={`${index2}-${child.id}`}
                      className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2"
                    >
                      <span className="text-gray-600">
                        {child?.name ?? "Course name"}
                      </span>
                      {index2 === 0 && (
                        <Modal
                          content={(toggleModal) => (
                            <Youtube
                              className="w-full"
                              videoId={child?.video}
                              id={child?.video}
                              opts={{
                                playerVars: {
                                  autoplay: 1,
                                  controls: 1,
                                  showinfo: 1,
                                },
                              }}
                            ></Youtube>
                          )}
                        >
                          {(toggleModal) => (
                            <span
                              className="link-wrapped"
                              onClick={toggleModal}
                            ></span>
                          )}
                        </Modal>
                      )}
                      {index2 === 0 && (
                        <Image src={IconPlay} width={20} height={20} alt="icon-play"/>
                      )}

                      {index2 !== 0 && <Image src={IconLock} width={20} height={20} alt="icon-lock"/>}
                    </div>
                  ))}
              </Item>
            );
          });
        }}
      </Accordion>
    </div>
  );
}
