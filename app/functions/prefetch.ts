"use client";

import { useEffect } from "react";
import { SubTeamCard } from "../interface";

export function usePrefetchImages(subTeamCard: SubTeamCard[]): void {
  useEffect(() => {
    let imageSrcs: string[] = [];

    subTeamCard.forEach((card) => {
      imageSrcs.push(card.video[0].placeholder.url);
    });
    //   console.log(imageSrcs);
    mountPrefetchLinks(imageSrcs);
  });
}

function mountPrefetchLinks(strings: string[]): void {
  const existingLinks = Array.from(document.head.querySelectorAll("link"));
  const uniqueStrings = strings.filter(
    (href) => !existingLinks.some((link) => link.href === href)
  );

  const container = document.head || document.createElement("head");
  if (!document.head) {
    document.body.appendChild(container);
  }

  const linkElements = uniqueStrings.map((href) => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = href;
    return link;
  });
  linkElements.forEach((link) => container.appendChild(link));
}
