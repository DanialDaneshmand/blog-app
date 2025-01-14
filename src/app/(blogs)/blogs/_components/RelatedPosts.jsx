import Author from "./Author";
import ImageCover from "./ImageCover";

function RelatedPost({ posts }) {
  return (
    <div className=" my-16">
      <p className="text-xl mb-4 mt-16">پست های مرتبط</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <ImageCover item={item} />
              <div className="flex items-center justify-between">
                <p>{item.title}</p>
                <Author item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
