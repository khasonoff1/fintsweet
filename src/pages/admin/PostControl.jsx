import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Flex,
  Form,
  Image,
  Pagination,
  Input,
  Modal,
  Space,
  Table,
} from "antd";

import {
  UserAddOutlined,
  SaveOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { changePage, getPost, searchPost } from "../../redux/actions/post";
import { getImg } from "../../utils";
import { LIMIT_TABLE } from "../../constants";

const PostControl = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  // const [photo, setPhoto] = useState(null);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const columns = [
    {
      title: "Image",
      dataIndex: "photo",
      key: "photo",
      render: (photo, i) => {
        const photoType = photo?.name?.split(".")[1];
        const photoId = photo?._id;
        const photo2 = `${photoId}.${photoType}`;
        const handleError = (error) => {
          error.target.src = "data:image/jpeg;base64,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";
        };

        return (
          <Image
            key={i}
            height={50}
            onError={handleError}
            src={getImg(photo2)}
          />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category?.name,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (desc, i) => <p key={i}>{desc.slice(0, 30)}...</p>,
    },
    {
      title: "user",
      dataIndex: "user",
      key: "user",
      render: (user) => user?.username,
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (id, i) => (
        <Space key={i} size="middle">
          <Link to={`/postControl/${id}`}>
            <Button type="dashed">See comments</Button>
          </Link>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button icon={<DeleteOutlined />} danger type="primary">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const { posts, loading, total, activePage } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    total === 0 && dispatch(getPost());
  }, [dispatch, total]);

  const showModal = () => {
    form.resetFields();
    setIsModalOpen(true);
    setSelected(null);
    setIsModalLoading(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submit = async () => {
    try {
      let values = await form.validateFields();
      // values.photo = photo;
      // await request.post("category", values);
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  // const uploadPhoto = async (e) => {
  //   try {
  //     let formData = new FormData();
  //     formData.append("file", e.target.files["0"]);
  //     const { data } = await request.post("upload", formData);
  //     setPhoto(data._id);
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  return (
    <Fragment>
      <Table
        scroll={{
          x: 1000,
        }}
        title={() => (
          <Flex align="center" justify="space-between">
            <h2>Posts ({posts.length})</h2>
            <Form
              name="search"
              wrapperCol={{
                span: 24,
              }}
              style={{
                width: 400,
              }}
              autoComplete="off"
            >
              <Space.Compact style={{ width: "100%" }}>
                <Search
                  onChange={(e) =>
                    dispatch(searchPost(e.target.value.toLowerCase()))
                  }
                  placeholder="Search user"
                  allowClear
                />
              </Space.Compact>
            </Form>
            <Button
              type="dashed"
              onClick={showModal}
              icon={<UserAddOutlined />}
            >
              Add category
            </Button>
          </Flex>
        )}
        loading={loading}
        dataSource={posts}
        columns={columns}
        pagination={false}
      />
      {total > LIMIT_TABLE ? (
        <Pagination
          total={total}
          pageSize={LIMIT_TABLE}
          current={activePage}
          onChange={(page) => dispatch(changePage(page))}
        />
      ) : null}
      <Modal
        title="User data"
        okText={selected === null ? "Add" : "Save"}
        okButtonProps={{
          icon: selected === null ? <UserAddOutlined /> : <SaveOutlined />,
        }}
        open={isModalOpen}
        onOk={submit}
        onCancel={closeModal}
        maskClosable={false}
        confirmLoading={isModalLoading}
      >
        <Form
          name="posts"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Photo"
            name="photo"
            // onChange={uploadPhoto}
            rules={[
              {
                required: true,
                message: "Please choose a file!",
              },
            ]}
          >
            <Input type="file" />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default PostControl;
