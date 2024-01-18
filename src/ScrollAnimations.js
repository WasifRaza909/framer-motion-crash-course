import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );

  return (
    <>
      <div>
        <motion.div
          style={{
            // scaleX: scrollYProgress,
            scaleX,
            background,
            transformOrigin: "left",
            position: "sticky",
            top: 0,
            width: "100%",
            height: "20px",
          }}
        />
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            metus leo. Etiam feugiat quam sem, vitae blandit metus semper in.
            Nam laoreet vestibulum odio id euismod. Nam venenatis porta nisl in
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
            accumsan. Fusce est diam, posuere vel tincidunt quis, pulvinar a
            augue. Maecenas id vestibulum erat. In hac habitasse platea
            dictumst. Maecenas aliquet turpis non tempus dignissim. Sed
            condimentum aliquam mi eu placerat. Nulla imperdiet quam vel
            convallis cursus. Integer aliquet ex sit amet viverra pellentesque.
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimations;
