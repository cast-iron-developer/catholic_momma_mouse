export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      comment: {
        Row: {
          active: boolean | null
          content: string | null
          created_at: string | null
          deleted: boolean | null
          id: string
          modified_at: string | null
          review_id: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          content?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id: string
          modified_at?: string | null
          review_id: string
          user_id: string
        }
        Update: {
          active?: boolean | null
          content?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          modified_at?: string | null
          review_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comment_review_id_review_id_fk"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "review"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_user_id_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      like: {
        Row: {
          comment_id: string
          created_at: string | null
          id: string
          review_id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string | null
          id: string
          review_id: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string | null
          id?: string
          review_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "like_comment_id_comment_id_fk"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_review_id_review_id_fk"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "review"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_user_id_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      review: {
        Row: {
          active: boolean | null
          content: Json | null
          created_at: string | null
          deleted: boolean | null
          id: string
          item: string | null
          modified_at: string | null
          slug: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          content?: Json | null
          created_at?: string | null
          deleted?: boolean | null
          id: string
          item?: string | null
          modified_at?: string | null
          slug: string
          user_id: string
        }
        Update: {
          active?: boolean | null
          content?: Json | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          item?: string | null
          modified_at?: string | null
          slug?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_user_id_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      review_revision: {
        Row: {
          active: boolean | null
          content: Json | null
          created_at: string | null
          deleted: boolean | null
          id: string
          item: string | null
          modified_at: string | null
          review_id: string
          slug: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          content?: Json | null
          created_at?: string | null
          deleted?: boolean | null
          id: string
          item?: string | null
          modified_at?: string | null
          review_id: string
          slug: string
          user_id: string
        }
        Update: {
          active?: boolean | null
          content?: Json | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          item?: string | null
          modified_at?: string | null
          review_id?: string
          slug?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_revision_review_id_review_id_fk"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "review"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "review_revision_user_id_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          created_at: string | null
          email: string
          id: string
          modified_at: string | null
          password: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          modified_at?: string | null
          password?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          modified_at?: string | null
          password?: string | null
        }
        Relationships: []
      }
      user_role: {
        Row: {
          role: Database["public"]["Enums"]["role"] | null
          user_id: string | null
        }
        Insert: {
          role?: Database["public"]["Enums"]["role"] | null
          user_id?: string | null
        }
        Update: {
          role?: Database["public"]["Enums"]["role"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_role_user_id_user_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

