import * as z from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PostValidation } from "@/lib/validation";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PostFormProps } from "@/types";
import FileUploader from "../shared/FileUploader";
import { useCreatePost } from "@/lib/react-query/queriesAndMutations";
import { toast } from "../ui/use-toast";

const PostForm = ({ post, action }: PostFormProps) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      imageUrl: post ? post.imageUrl : "",
      location: post ? post.location : "",
      tags: post ? post.tags : "",
      carModel: post ? post.carModel : "",
      carMake: post ? post.carMake : "",
      carYear: post ? post.carYear : "",
      carPrice: post ? post.carPrice : 0,
      carMileage: post ? post.carMileage : 0,
    },
  });
  // Query

  const { mutateAsync: createPost, isPending: isCreating } = useCreatePost();

  // Handler
  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    try {
      const newPost = await createPost({ ...value });

      if (newPost !== undefined) {
        // Assuming newPost has an id property if creation is successful
        toast({
          title: "Post created successfully.",
        });
        console.log(newPost);
        navigate("/");
      } else {
        toast({
          title: "Post creation failed. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred while creating the post. Please try again.",
      });
      console.error("Error creating post: ", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:gap-4">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Add Photos</FormLabel>
                <FormControl>
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl ?? ""}
                  />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">
                    Add Location
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">
                    Add Tags (separated by comma ",")
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Art, Expression, Learn"
                      type="text"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="carModel"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Car Model</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carMake"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Car Make</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carYear"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Car Year</FormLabel>
                <FormControl>
                  <Input type="string" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carPrice"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Car Price</FormLabel>
                <FormControl>
                  <Input type="number" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carMileage"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="shad-form_label">Car Mileage</FormLabel>
                <FormControl>
                  <Input type="number" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 items-center justify-end">
          <Button
            type="button"
            className="shad-button_dark_4"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="shad-button_primary whitespace-nowrap"
          >
            {isCreating ? "Creating Post ..." : `${action.toUpperCase()} POST`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
