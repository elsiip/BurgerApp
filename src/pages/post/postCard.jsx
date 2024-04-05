export default function PostCard({item}) {
  return (
    <div>
      <div>
        <h3 className="text-xl">{item?.title}</h3>
        <p className="font-bold">{item?.body}</p>
        
      </div>
    </div>
  );
}