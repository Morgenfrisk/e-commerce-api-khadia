const agg = [
  {
    $match: {
      product: new ObjectId("62a9c94d150faaae86270f7b"),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
